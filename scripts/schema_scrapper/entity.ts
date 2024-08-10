import path from "node:path/posix";
import { readJson, writeFile } from "../util/fs";
import { info } from "../util/log";
import { SchemaProperty, snakeToPascal } from "../util/schema_parser";
import { parseComponentSchemas } from "./parser";
import { getVersion } from "./version";

function camelToSnake(str: string) {
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}

// Make sure the function name is in camelCase

function canPowerJump() {
  const text = `export type EntityCanPowerJumpComponent = Record<string, never>;`;
  return [text, "EntityCanPowerJumpComponent"];
}

const patches = [canPowerJump];

export async function parseEntityComponent() {
  const version = await getVersion("entity");
  info(`version ${version}`);
  const parsed = await parseComponentSchemas("entity");
  const parsedPatches = await Promise.all(
    patches.map(async (x) => {
      info(`Patching: ${x.name}`);
      const [text, typeName] = x();
      await writeFile(`./src/bp/entity_components/${camelToSnake(x.name)}.ts`, text, {
        parser: "typescript",
      });
      return [camelToSnake(x.name), typeName];
    }),
  );

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
      // Add parsed patches
      for (const [filename, typeName] of parsedPatches) {
        mainString.push(`"minecraft:${filename}"?: ${typeName};`);
        mainString.unshift(`import { ${typeName} } from "./${filename}.js";`);
      }
      mainString.push("} & EntityComponents.Annotations & EntityComponents.Behaviors;");
    } else {
      mainString.push("};");
    }
  }
  await writeFile(`./src/bp/entity_components/index.ts`, mainString.join("\n"), {
    parser: "typescript",
  });
}
