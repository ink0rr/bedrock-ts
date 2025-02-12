import { ItemTexturePath } from "../../shared/literals/entity_texture_path.js";
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
