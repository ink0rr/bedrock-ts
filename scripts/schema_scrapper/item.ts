import path from "node:path/posix";
import { readJson, writeFile } from "../util/fs";
import { info } from "../util/log";
import { SchemaProperty } from "../util/schema_parser";
import { parseComponentSchemas } from "./parser";
import { getVersion } from "./version";

export async function parseItemComponent() {
  const version = await getVersion("item");
  info(`version ${version}`);
  const parsed = await parseComponentSchemas("item");

  // Patch for icon
  await patchItemIconComponent();

  const mainString: string[] = ["export type ItemComponents = {"];
  const excludeRefs = ["holidayCreatorFeatures.json", "enableGameTestFramework.json"];
  const mainFilepath = `./temp/editor-packages-main/packages/minecraftBedrock/schema/item/${version}/components/_main.json`;
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
  await writeFile(`./src/bp/item_components/index.ts`, mainString.join("\n"), {
    parser: "typescript",
  });
}

async function patchItemIconComponent() {
  const text = `import { ItemTexturePath } from "../../shared/literals/entity_texture_path.js";
import { ItemIcon } from "../../shared/literals/item_icon.js";
import { TrimPalette } from "../../shared/trim_palette.js";

/**
 * This map contains the different textures that can be used for the item's icon. Default will contain the actual icon texture. Armor trim textures and palettes can be specified here too. The icon textures are the keys from the resource_pack/textures/item_texture.json 'texture_data' object associated with the texture file.
 */
export type ItemIconComponent =
  | {
      textures?: {
        /**
         * Default item icon
         */
        default?: ItemTexturePath;
        /**
         * Trim overlay icon
         */
        icon_trim?: ItemTexturePath;
        /**
         * Dyed item icon
         */
        dyed?: ItemTexturePath;
      } & TrimPalette<ItemTexturePath>;
    }
  | ItemIcon;
`;
  await writeFile(`./src/bp/item_components/icon.ts`, text, {
    parser: "typescript",
  });
}
