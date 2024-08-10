import path from "node:path/posix";
import { readJson, writeFile } from "../util/fs";
import { info } from "../util/log";
import { SchemaProperty, snakeToPascal } from "../util/schema_parser";
import { parseComponentSchemas } from "./parser";
import { getVersion } from "./version";

export async function parseEntityComponent() {
  const version = await getVersion("entity");
  info(`version ${version}`);
  const parsed = await parseComponentSchemas("entity");
  // const mainFilepath = `./temp/editor-packages-main/packages/minecraftBedrock/schema/entity/${version}/components/_main.json`;
  // if (!Bun.file(mainFilepath).exists()) {
  //   throw new Error(`File not found for main: ${mainFilepath}`);
  // }
  // const mainJson = await readJson<SchemaProperty>(mainFilepath, { jsonc: true });
  // if (!mainJson.allOf) throw new Error("No allOf found in _main");
  // for (const allOfData of mainJson.allOf) {
  //   const { properties, $ref } = allOfData;
  //   if ($ref) {
  //     // Exclude some refs
  //     const endsWith = excludeRefs.some((x) => $ref.endsWith(x));
  //     if (endsWith) continue;
  //   }
  //   if (properties) {
  //     for (const [k, v] of Object.entries(properties)) {
  //       const filenameProp = path.basename(v.$ref!, ".json");
  //       const typeName = parsed.get(filenameProp);
  //       if (!typeName) continue;
  //       mainString.push(`"${k}"?: ${typeName};`);
  //       // Insert import at the top
  //       mainString.unshift(`import { ${typeName} } from "./${filenameProp}.js";`);
  //     }
  //   }
  // }
  // mainString.push("};");
  // await writeFile(`./src/bp/entity_components/index.ts`, mainString.join("\n"), {
  //   parser: "typescript",
  // });

  const componentTypes = ["annotations", "behaviors", "components"];
  const mainString: string[] = ["export namespace EntityComponents {"];
  for (const componentType of componentTypes) {
    let typeName = `${snakeToPascal(componentType)}`;
    if (componentType === "components") {
      mainString.push("};");
      typeName = "EntityComponents";
    }
    const filepath = `./temp/editor-packages-main/packages/minecraftBedrock/schema/entity/${version}/${componentType}/_main.json`;
    const json = await readJson<SchemaProperty>(filepath, { jsonc: true });
    mainString.push(`export type ${typeName} = {`);
    const { properties } = json;
    if (!properties) {
      throw new Error("No properties found in _main");
    }
    for (const [k, v] of Object.entries(properties)) {
      const filenameProp = path.basename(v.$ref!, ".json");
      const typeName = parsed.get(filenameProp);
      if (!typeName) continue;
      mainString.push(`"${k}"?: ${typeName};`);
      // Insert import at the top
      mainString.unshift(`import { ${typeName} } from "./${filenameProp}.js";`);
    }
    if (componentType === "components") {
      mainString.push("} & EntityComponents.Annotations & EntityComponents.Behaviors;");
    } else {
      mainString.push("};");
    }
  }
  await writeFile(`./src/bp/entity_components/index.ts`, mainString.join("\n"), {
    parser: "typescript",
  });
}
