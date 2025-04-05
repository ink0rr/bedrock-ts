import path from "node:path/posix";
import { writeFile } from "../util/fs";
import { info } from "../util/log";
import { RefData } from "../util/schema_parser";
import { parseComponentSchemas } from "./parser";
import { getVersion } from "./version";

async function itemIconComponent() {
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

async function refParser(str: string): Promise<RefData | string> {
  const filename = path.basename(str, ".json");
  switch (filename) {
    case "eventEnum":
      return "string";
    case "embedded":
      return {
        type: "MoLang",
        import: 'import { MoLang } from "../../shared/molang.js";',
      };
    case "block_identifiers":
      return {
        type: "BlockIdentifier",
        import: 'import { BlockIdentifier } from "../../shared/literals/block_identifier.js";',
      };
  }
  return "unknown";
}

export async function parseParticleComponents() {
  const version = await getVersion("particle");
  info(`version ${version}`);
  const dest = path.join("src", "rp", "particle_components");
  const arg = {
    dest,
    typePrefix: "Particle",
    typeSuffix: "Component",
  };
  const components = await parseComponentSchemas({
    dirpath: `particle/${version}/components`,
    refParser,
    ...arg,
  });
  await itemIconComponent();
  const str = ["export type ParticleComponents = {"];
  for (const [key, { filepath, typeName }] of components) {
    str.push(`"${key}"?: ${typeName};`);
    str.unshift(`import { ${typeName} } from "./${path.basename(filepath)}";`);
  }
  str.push("};");
  await writeFile(path.join(dest, "index.ts"), str.join("\n"), { parser: "typescript" });
}
