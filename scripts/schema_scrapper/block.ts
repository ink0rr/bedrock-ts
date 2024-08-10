import path from "node:path/posix";
import { readJson, writeFile } from "../util/fs";
import { SchemaProperty } from "../util/schema_parser";
import { parseComponentSchemas } from "./parser";

export async function parseBlockComponent(version: string = "v1.21.10") {
  const parsed = await parseComponentSchemas("block");
  const mainString: string[] = ["export type BlockComponents = {"];
  const excludeRefs = ["holidayCreatorFeatures.json", "enableGameTestFramework.json"];
  const mainFilepath = `./temp/editor-packages-main/packages/minecraftBedrock/schema/block/${version}/components/_main.json`;
  if (!Bun.file(mainFilepath).exists()) {
    throw new Error(`File not found for main: ${mainFilepath}`);
  }
  const mainJson = await readJson<SchemaProperty>(mainFilepath, { jsonc: true });
  if (!mainJson.allOf) throw new Error("No allOf found in _main");
  for (const allOfData of mainJson.allOf) {
    const { properties, $ref } = allOfData;
    if ($ref) {
      // Exclude some refs
      const endsWith = excludeRefs.some((x) => $ref.endsWith(x));
      if (endsWith) continue;
    }
    if (properties) {
      for (const [k, v] of Object.entries(properties)) {
        const filenameProp = path.basename(v.$ref!, ".json");
        const typeName = parsed.get(filenameProp);
        if (!typeName) continue;
        mainString.push(`"${k}"?: ${typeName};`);
        // Insert import at the top
        mainString.unshift(`import { ${typeName} } from "./${filenameProp}.js";`);
      }
    }
  }
  mainString.push("};");
  await writeFile(`./src/bp/block_components/index.ts`, mainString.join("\n"), {
    parser: "typescript",
  });
}
