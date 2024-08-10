import * as path from "node:path";

function snakeToCamel(s: string) {
  return s.replace(/([-_.][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace("-", "").replace("_", "").replace(".", "");
  });
}

export function snakeToPascal(s: string) {
  return snakeToCamel(s).replace(/^[a-z]/, (l) => l.toUpperCase());
}

export type SchemaProperty = {
  title?: string;
  description?: string;
  type?: string;
  enum?: Array<number | string>;
  $ref?: string;
  anyOf?: SchemaProperty[];
  oneOf?: SchemaProperty[];
  allOf?: SchemaProperty[];
  then?: SchemaProperty;
  items?: SchemaProperty | SchemaProperty[];
  default?: never;
  properties?: Record<string, SchemaProperty>;
  definitions?: Record<string, SchemaProperty>;
  doNotSuggest?: boolean;
  const?: never;
};
type ParserOptions = {
  useNamespace?: boolean;
};

const types = new Map<string, string>([["integer", "number"]]);
type IMap = {
  name: string;
  path: string;
};
const importMap = new Map<string, IMap>([
  [
    "entity_identifiers",
    {
      name: "EntityIdentifier",
      path: 'import { EntityIdentifier } from "../../shared/literals/entity_identifier.js";',
    },
  ],
  [
    "item_identifiers",
    {
      name: "ItemIdentifier",
      path: 'import { ItemIdentifier } from "../../shared/literals/item_identifier.js";',
    },
  ],
  [
    "block_identifiers",
    {
      name: "BlockIdentifier",
      path: 'import { BlockIdentifier } from "../../shared/literals/block_identifier.js";',
    },
  ],
  [
    "eventDefinition",
    {
      name: "EntityEventTrigger",
      path: 'import { EntityEventTrigger } from "../entity_behavior/event.js";',
    },
  ],
  [
    "family",
    {
      name: "Family",
      path: 'import { Family } from "../../shared/family.js";',
    },
  ],
  [
    "filter",
    {
      name: "Filter",
      path: 'import { Filter } from "../../shared/filter.js";',
    },
  ],
  [
    "soundEvent",
    {
      name: "SoundEvent",
      path: 'import { SoundEvent } from "../../shared/sound_event.js";',
    },
  ],
  [
    "damageType",
    {
      name: "DamageSource",
      path: 'import { DamageSource } from "../../shared/damage_source.js";',
    },
  ],
  [
    "effectName",
    {
      name: "SpellEffects",
      path: 'import { SpellEffects } from "../../shared/spell_effects.js";',
    },
  ],
  [
    "effectDefinition",
    {
      name: "SpellEffectDefinition",
      path: 'import { SpellEffectDefinition } from "../entity_behavior/spell_effect.js";',
    },
  ],
  [
    "actionText",
    {
      name: "ActionText",
      path: 'import { ActionText } from "../../shared/action_text.js";',
    },
  ],
  [
    "slotType",
    {
      name: "Slot",
      path: 'import { Slot } from "../../shared/slot.js";',
    },
  ],
  [
    "inventoryType",
    {
      name: "Inventory",
      path: 'import { Inventory } from "../../shared/inventory.js";',
    },
  ],
  [
    "potionIds",
    {
      name: "PotionId",
      path: 'import { PotionId } from "../../shared/potion_id.js";',
    },
  ],
  [
    "trade_table_paths",
    {
      name: "TradeTable",
      path: 'import { TradeTable } from "../../shared/trade_table.js";',
    },
  ],
  [
    "loot_table_paths",
    {
      name: "LootTablePath",
      path: 'import { LootTablePath } from "../../shared/literals/loot_table_path.js";',
    },
  ],
  [
    "blockState",
    {
      name: "BlockState",
      path: 'import { BlockState } from "../../shared/block_state.js";',
    },
  ],
  [
    "gameDifficulty",
    {
      name: "Difficulty",
      path: 'import { Difficulty } from "../../shared/difficulty.js";',
    },
  ],
  [
    "subject",
    {
      name: "FilterSubject",
      path: 'import { FilterSubject } from "../../shared/filter.js";',
    },
  ],
  [
    "item_tags",
    {
      name: "ItemTag",
      path: 'import { ItemTag } from "../../shared/literals/item_tag.js";',
    },
  ],
  [
    "entityType",
    {
      name: "EntityBehaviorType",
      path: 'import { EntityBehaviorType } from "../entity_behavior/type.js";',
    },
  ],
  [
    "prioritizedEntityType",
    {
      name: "EntityBehaviorPrioritizedType",
      path: 'import { EntityBehaviorPrioritizedType } from "../entity_behavior/prioritized_type.js";',
    },
  ],
  [
    "componentsList",
    {
      name: "keyof EntityComponents",
      path: 'import { EntityComponents } from "./index.js";',
    },
  ],
  [
    "embedded",
    {
      name: "MoLang",
      path: 'import { MoLang } from "../../shared/molang.js";',
    },
  ],
  [
    "hexColor",
    {
      name: "HexColor",
      path: 'import { HexColor } from "../../shared/hex_color.js";',
    },
  ],
  [
    "eventEnum",
    {
      name: "VanillaEntityEvent",
      path: 'import { VanillaEntityEvent } from "../entity_behavior/event.js";',
    },
  ],
  [
    "particleDefinition",
    {
      name: "EntityBehaviorParticleDefinition",
      path: 'import { EntityBehaviorParticleDefinition } from "../entity_behavior/particle.js";',
    },
  ],
  [
    "particleName",
    {
      name: "LegacyParticle",
      path: 'import { LegacyParticle } from "../../shared/legacy_particle.js";',
    },
  ],
  [
    "navigation",
    {
      name: "EntityBehaviorNavigation",
      path: 'import { EntityBehaviorNavigation } from "../entity_behavior/navigation.js";',
    },
  ],
  [
    "geometry",
    {
      name: "GeometryIdentifier",
      path: 'import { GeometryIdentifier } from "../../shared/literals/geometry_identifier.js";',
    },
  ],
  [
    "particle_identifiers",
    {
      name: "ParticleIdentifier",
      path: 'import { ParticleIdentifier } from "../../shared/literals/particle_identifier.js";',
    },
  ],
  [
    "soundDefinition",
    {
      name: "SoundDefinitionIdentifier",
      path: 'import { SoundDefinitionIdentifier } from "../../shared/literals/sound_definition_identifier.js";',
    },
  ],
  [
    "itemTexture",
    {
      name: "ItemIcon",
      path: 'import { ItemIcon } from "../../shared/literals/item_icon.js";',
    },
  ],
  [
    "minecraftColor",
    {
      name: "MinecraftColor",
      path: 'import { MinecraftColor } from "../../shared/literals/minecraft_color.js";',
    },
  ],
  [
    "itemWearableType",
    {
      name: "WearableSlot",
      path: 'import { WearableSlot } from "../../shared/slot.js";',
    },
  ],
]);

function parseRef(ref: string) {
  switch (ref) {
    case "../../../blockCulling/dynamic/identifierEnum.json":
      return "string";
  }

  const key = path.basename(ref, ".json");
  const value = importMap.get(key);
  if (value) {
    return value.name;
  }

  switch (key) {
    case "degree":
    case "behaviorPriority":
      return "number";
    case "componentGroupEnum":
    case "customComponentEnum":
      return "string";
  }

  // definitions
  if (ref.startsWith("#/definitions/")) {
    const def = ref.replace("#/definitions/", "");
    const typeName = snakeToPascal(def);
    return typeName;
  }

  return undefined;
}

function resolveImports(data: string) {
  const s = new Set<string>();
  for (const [_, value] of importMap) {
    // const regex = new RegExp(`(?<=\\b${value.name}\\b)`, "g");
    // if (data.match(regex)) {
    //   s.add(value.path);
    // }
    const tests = [
      value.name + "\n",
      value.name + ">",
      value.name + "[]",
      value.name + " |",
      value.name + ";",
      value.name + ",", // for the last item
      "&" + value.name,
    ];
    for (const test of tests) {
      if (value.name === "TrimPalette<ItemTexturePath>") {
      }
      if (data.includes(test)) {
        s.add(value.path);
      }
    }
  }
  return Array.from(s).join("\n");
}

function createObject(prop: SchemaProperty) {
  const s = [`{`];
  const fields = prop.properties ?? {};
  for (const [k, v] of Object.entries(fields)) {
    s.push(parseProperty(k, v));
  }
  s.push(`}`);

  return s.join("\n");
}

function parsePropertyType(prop: SchemaProperty): string {
  const s: string[] = [];
  if (prop.doNotSuggest) return "";

  // Constants
  if (prop.const) {
    return prop.const;
  }

  if (prop.anyOf) {
    if (prop.type === "object") {
      for (const p of prop.anyOf) {
        s.push(createObject(p));
      }
      return s.join(" | ");
    } else {
      for (const p of prop.anyOf) {
        s.push(parsePropertyType(p));
      }
      return s.join(" | ");
    }
  } else if (prop.oneOf) {
    for (const p of prop.oneOf) {
      s.push(parsePropertyType(p));
    }
    return s.join(" | ");
  } else if (prop.allOf) {
    for (const p of prop.allOf) {
      s.push(parsePropertyType(p));
    }
    return s.join(" & ");
  } else if (prop.then) {
    // workaround solution for projectile
    return parsePropertyType(prop.then);
  } else {
    if (prop.$ref) {
      const refType = parseRef(prop.$ref);
      if (refType) {
        return refType;
      } else {
        console.log(`Unknown ref: ${prop.$ref}`);
      }
    }

    if (prop.type === "array") {
      // return `Array<${parsePropertyType(prop.items!)}>`
      if (Array.isArray(prop.items)) {
        for (const item of prop.items) {
          s.push(parsePropertyType(item));
        }
        return `[${s.join(", ")}]`;
      } else {
        return `Array<${parsePropertyType(prop.items!)}>`;
      }
    }

    if (prop.type === "object") {
      return createObject(prop);
    }

    if (prop.enum) {
      return prop.enum.map((v) => JSON.stringify(v)).join(" | ");
    }

    // Has properties
    if (prop.properties) {
      return createObject(prop);
    }

    // Doesn't have type but has default
    if (!prop.type && prop.default) {
      return typeof prop.default;
    }
  }

  return prop.type ? types.get(prop.type) || prop.type : "any";
}

function parseProperty(name: string, prop: SchemaProperty, skipField = false) {
  const s: string[] = [];

  const propType = parsePropertyType(prop);
  if (!propType) return "";

  if (prop.description) {
    s.push(`/**`);
    s.push(` * ${prop.description}`);
    if (prop.default) s.push(` * @default ${prop.default}`);
    s.push(` */`);
  }

  if (!skipField) s.push(`${name}?: ${propType};`);
  else s.push(`${propType};`);
  return s.join("\n");
}

export function parseSchema(json: SchemaProperty, name: string, options?: ParserOptions) {
  const { properties: fields, definitions, doNotSuggest, type } = json;
  if (doNotSuggest) return "";

  // Direct type
  if (type && type !== "object") {
    const s = `export type ${name} = ${parsePropertyType(json)};`;
    const imports = resolveImports(s);
    return `${imports}\n${s}`;
  }

  let s: string[] = [];
  let hasNamespace = false;
  const parsedDefinitions = new Set<string>();

  // Namespace
  if (options?.useNamespace) {
    hasNamespace = true;
    s.push(`export namespace ${name} {`);
  }

  // Definitions
  if (definitions) {
    for (const [k, v] of Object.entries(definitions)) {
      const typeName = snakeToPascal(k);
      s.push(`export type ${typeName} = ${parseProperty(k, v, true)};`);
      parsedDefinitions.add(typeName);
    }
  }

  // Close namespace
  if (options?.useNamespace) {
    const last = s[s.length - 1];
    if (last === `export namespace ${name} {`) {
      s.pop();
      hasNamespace = false;
    } else {
      s.push(`}`);
    }
  }

  if (json.description) {
    s.push(`/**`);
    s.push(` * ${json.description}`);
    s.push(` */`);
  }

  if (fields) {
    s.push(`export type ${name} = {`);
    for (const [k, v] of Object.entries(fields)) {
      // If include symbols, add wrap with quotes
      const name = /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(k) ? k : `'${k}'`;
      s.push(parseProperty(name, v));
    }
    s.push(`}`);
  } else {
    if (json.anyOf) {
      s.push(`export type ${name} = `);
      s.push(`  ${json.anyOf.map((v: any) => parsePropertyType(v)).join(" | ")};`);
    } else if (json.oneOf) {
      s.push(`export type ${name} = `);
      s.push(`  ${json.oneOf.map((v: any) => parsePropertyType(v)).join(" | ")};`);
    } else if (json.allOf) {
      s.push(`export type ${name} = `);
      s.push(`  ${json.allOf.map((v: any) => parsePropertyType(v)).join(" & ")};`);
    } else if (json.$ref) {
      const refType = parseRef(json.$ref);
      if (refType) {
        s.push(`export type ${name} = ${refType};`);
      } else {
        s.push(`export type ${name} = Record<string, never>;`);
        console.log(`Unknown ref: ${json.$ref}`);
      }
    } else {
      // Empty object
      s.push(`export type ${name} = Record<string, never>;`);
    }
  }

  const imports = resolveImports(s.join("\n"));
  if (imports) {
    s.unshift(resolveImports(s.join("\n")), "");
  }

  // Idiot way for resolving namespaces
  if (hasNamespace) {
    for (const parsedDefinition of parsedDefinitions) {
      // Replace all occurences of the parsed definition
      s = s.map((line) => {
        // Make sure it's not the definition itself
        const regex = new RegExp(`(?<!type )${parsedDefinition}`, "g");
        return line.replace(regex, `${name}.${parsedDefinition}`);
      });
    }
  }

  // Namespace
  // if (options?.useNamespace) {
  //   s.push(`}`);
  //   s.push(`declare type ${name} = ${name}.${name};`);
  //   s.push(`export { ${name} };`);
  // }

  return s.join("\n");
}
