import path from "node:path";
import { warning } from "./log";
import { pascalCase, wrapQuote } from "./util";

export type Schema = {
  $ref?: string;
  title?: string;
  description?: string;
  type?: string | Array<string>;
  enum?: Array<number | string>;
  anyOf?: Array<Schema>;
  oneOf?: Array<Schema>;
  allOf?: Array<Schema>;
  then?: Schema;
  else?: Schema;
  items?: Schema | Array<Schema>;
  default?: never;
  properties?: Record<string, Schema>;
  definitions?: Record<string, Schema>;
  doNotSuggest?: boolean;
  const?: never;
  patternProperties?: Record<string, Schema>;
  additionalProperties?: Schema | boolean;
  propertyNames?: Schema;
  minimum?: number;
  maximum?: number;
};

export class SchemaParser {
  typeMap = new Map<string, string>([
    ["integer", "number"],
    ["object", "Record<string, never>"],
  ]);
  constructor() {}
  protected defaultRefParser(ref: string): RefData | string {
    const filename = path.basename(ref, ".json");
    switch (filename) {
      case "degree":
      case "behaviorPrioerity":
        return "number";
      case "componentGroupEnum":
      case "customComponentEnum":
        return "string";
    }
    return "string";
  }
  protected async parseRef(ref: string, parser?: RefParser): Promise<RefData | string> {
    if (ref.startsWith("#/definitions/")) {
      return this.refDefinition(ref);
    }
    return parser ? await parser(ref) : this.defaultRefParser(ref);
  }
  protected async createObject(
    schema: Schema,
    { refParser }: RefParserParameter = {},
  ): Promise<string> {
    const str: string[] = [];
    str.push("{");
    for (const [key, value] of Object.entries(schema.properties || {})) {
      const name = wrapQuote(key);
      str.push(await this.parseProperty({ name, schema: value, skip: false, refParser }));
    }
    str.push("}");
    return str.join("\n");
  }
  protected createJsDoc(schema: Schema) {
    const str: string[] = [];
    if (schema.description) {
      str.push(`/**`);
      str.push(` * ${schema.description}`);
      if (schema.default) {
        str.push(` * @default ${JSON.stringify(schema.default)}`);
      }
      str.push(` */`);
    }
    return str.join("\n");
  }
  private refDefinition(ref: string): string {
    const name = ref.replace("#/definitions/", "");
    return `<useNamespace>${pascalCase(name)}</useNamespace>`;
  }
  private async parsePropertyType(
    schema: Schema,
    options?: ParsePropertyTypeOptions,
  ): Promise<string> {
    const { refParser } = options || {};
    if (schema.doNotSuggest) {
      return "";
    }
    // Constants
    if (schema.const) {
      if (typeof schema.const === "string") {
        return `"${schema.const}"`;
      }
      return schema.const;
    }
    // of
    const fields = {
      anyOf: "|",
      oneOf: "|",
      allOf: "&",
    } as const;
    for (const [key, value] of Object.entries(fields)) {
      const data = schema[key as keyof typeof fields];
      if (data) {
        const str: string[] = [];
        const types = (
          await Promise.all(data.map(async (x) => await this.parsePropertyType(x, { refParser })))
        ).join(` ${value} `);

        str.push(`${types}`);
        return str.join("");
      }
    }
    // then
    if (schema.then) {
      return await this.parsePropertyType(schema.then, { refParser });
    }
    // Enum
    if (schema.enum) {
      return schema.enum.map((v) => JSON.stringify(v)).join(" | ");
    }
    // Ref
    // if (schema.$ref && !schema.type) {
    if (schema.$ref) {
      const ref = await this.parseRef(schema.$ref, refParser);
      if (ref) {
        if (typeof ref === "string") {
          return ref;
        }
        const { type, import: _import } = ref;
        if (_import) {
          return type + `<import>${_import}</import>`;
        }
        return type;
      } else {
        warning(`Ref not found: ${schema.$ref}`);
      }
    }
    // Doesn't have but default
    if (!schema.type && schema.default) {
      return typeof schema.default;
    }
    // Type
    if (schema.type) {
      if (Array.isArray(schema.type)) {
        return schema.type.map((v) => this.typeMap.get(v) || v).join(" | ");
      }
      if (schema.type === "array") {
        if (Array.isArray(schema.items)) {
          const result = await Promise.all(
            schema.items.map(async (item) => await this.parsePropertyType(item, { refParser })),
          );
          return `[${result.join(", ")}]`;
        }
        if (!schema.items) {
          warning(`Array type without items: ${schema.type}`);
          return `Array<any>`;
        }
        // Ref
        if (schema.items.$ref) {
          const type = await this.parseRef(schema.items.$ref, refParser);
          if (type) {
            if (typeof type === "string") {
              return `Array<${type}>`;
            }
            const { type: typeName, import: _import } = type;
            if (_import) {
              return `Array<${typeName}<import>${_import}</import>>`;
            }
            return `Array<${typeName}>`;
          }
          warning(`Ref not found: ${schema.items.$ref}`);
        }
        // anyOf
        if (schema.items.anyOf) {
          const result = await Promise.all(
            schema.items.anyOf.map(
              async (item) => await this.parsePropertyType(item, { refParser }),
            ),
          );
          return `Array<${result.join(" | ")}>`;
        }
        // Hacky way if the prop.items doesn't hava a type.
        // Usually, it should be a object.
        if (!schema.items.type && Object.keys(schema.items).length > 0) {
          const data = JSON.parse(JSON.stringify(schema.items));
          const temp = {
            properties: data,
          };
          const obj = await this.createObject(temp, { refParser });
          return `Array<${obj}>`;
        }
        return `Array<${await this.parsePropertyType(schema.items, { refParser })}>`;
      }
    }
    if (schema.type === "object" || schema.properties) {
      const str: string[] = [];
      // Pattern
      if (schema.patternProperties) {
        // TODO: Fix this
        for (const value of Object.values(schema.patternProperties)) {
          str.push(`{ [key: string]: ${await this.parsePropertyType(value, { refParser })} }`);
          break;
        }
        // const values = Object.values(schema.patternProperties);
        // if (values.length === 1) {
        //   const result = await this.parsePropertyType(values[0], { refParser });
        //   str.push(result);
        // } else {
        //   const result = await Promise.all(
        //     values.map(async (item) => await this.parsePropertyType(item, { refParser })),
        //   );
        //   str.push(result.join(" | "));
        // }
      }
      let obj = await this.createObject(schema, { refParser });
      if (schema.additionalProperties && typeof schema.additionalProperties === "object") {
        const additional = await this.parsePropertyType(schema.additionalProperties, {
          refParser,
        });
        if (schema.propertyNames) {
          const propertyName = await this.parsePropertyType(schema.propertyNames, { refParser });
          obj = `Record<${propertyName}, ${additional}>`;
        } else {
          if (obj === "{\n}") {
            obj = additional;
          } else {
            obj += ` & ${additional}`;
          }
        }
      }
      // Check result
      if (obj === "{\n}") {
        if (str.length > 0) {
          return str.join(" | ");
        }
        return "Record<string, never>";
      }
      return obj;
    }
    const retval = schema.type ? this.typeMap.get(schema.type) || schema.type : undefined;
    if (retval) {
      return retval;
    }
    warning(`Type not found:`, JSON.stringify(schema));
    return "Record<string, never>";
  }
  private async parseProperty({ name, schema, skip = false, refParser }: ParsePropertyArgs) {
    const str: string[] = [];
    const type = await this.parsePropertyType(schema, { refParser });
    if (!type) {
      return "";
    }
    if (schema.description) {
      str.push(this.createJsDoc(schema));
    }
    if (!skip) {
      str.push(`${name}?: ${type};`);
    } else {
      str.push(`${type}`);
    }
    return str.join("\n");
  }
  async parse(schema: Schema, name: string, opts?: ParseOptions): Promise<string> {
    const { properties, definitions, doNotSuggest, type, description } = schema;
    const { refParser } = opts || {};
    const str: string[] = [];
    const _definitions = new Set<string>();
    let namespace = false;
    if (doNotSuggest) {
      return "";
    }
    // if (typeof type === "string" && type !== "object" && !schema.$ref && !schema.items) {
    //   if (description) {
    //     str.push(this.createJsDoc(schema));
    //   }
    //   const typeName = this.typeMap.get(type) || type;
    //   str.push(`export type ${name} = ${typeName};`);
    //   return str.join("\n");
    // }

    if (definitions) {
      namespace = true;
      str.push(`export namespace <namespace>${name}</namespace> {`);
      for (const [key, value] of Object.entries(definitions)) {
        const typeName = pascalCase(key);
        const name = wrapQuote(key);
        str.push(
          `export type ${typeName} = ${await this.parseProperty({ name, schema: value, skip: true, refParser })};`,
        );
        _definitions.add(typeName);
      }
    }
    // Close namespace
    if (namespace) {
      const last = str[str.length - 1];
      if (last === `export namespace <namespace>${name}</namespace> {`) {
        str.pop();
        namespace = false;
      } else {
        str.push(`}`);
      }
    }

    if (description) {
      str.push(this.createJsDoc(schema));
    }

    if (properties && Object.keys(properties).length > 0) {
      str.push(`export type ${name} = {`);
      for (const [key, value] of Object.entries(properties)) {
        const name = wrapQuote(key);
        str.push(await this.parseProperty({ name, schema: value, skip: false, refParser }));
      }
      str.push("}");
    } else {
      const typeName = await this.parsePropertyType(schema, { refParser });
      if (typeName) {
        str.push(`export type ${name} = ${typeName};`);
      } else {
        warning(`Type not found: ${name}`);
        str.push(`export type ${name} = Record<string, never>;`);
      }
    }

    const importRegex = /<import>(.*?)<\/import>/g;
    const useNamespaceRegex = /<useNamespace>(.*?)<\/useNamespace>/g;
    const imports = new Set<string>();
    for (let i = 0; i < str.length; i++) {
      const v = str[i];
      // Namespace
      if (namespace) {
        str[i] = v.replace(/<namespace>(.*?)<\/namespace>/g, name);
      }
      // Resolve imports
      const match = v.match(importRegex);
      if (match) {
        for (const m of match) {
          const importPath = m.replace(importRegex, "$1");
          imports.add(importPath);
        }
        str[i] = v.replace(importRegex, "");
      }
      // Resolve useNamespace
      str[i] = str[i].replace(useNamespaceRegex, (_, p1) => {
        return name + "." + p1;
      });
    }
    if (imports.size > 0) {
      str.unshift(...imports, "");
    }

    return str.join("\n");
  }
}

export type ParsePropertyArgs = {
  name: string;
  schema: Schema;
  skip?: boolean;
} & RefParserParameter;

export type ParsePropertyTypeOptions = RefParserParameter;

export type ParseOptions = RefParserParameter;

export type RefData = {
  type: string;
  import?: string;
};

type RefParserParameter = {
  refParser?: RefParser;
};
type RefParser = (ref: string) => Promise<RefData | string>;
