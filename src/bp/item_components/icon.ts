import { ItemIcon } from "../../shared/item_icon.js";

/**
 * Determines the icon to represent the item in the UI and elsewhere. In format versions before 1.20.10, this component requires the 'Holiday Creator Features' experimental toggle.
 */
export type ItemIconComponent =
  | ItemIcon
  | {
      /**
       * This map contains the different textures that can be used for the item's icon. Default will contain the actual icon texture. Armor trim textures and palettes can be specified here as well. The icon textures are the keys from the resource_pack/textures/item_texture.json 'texture_data' object associated with the texture file.
       */
      textures?: {
        /**
         * Default item icon
         */
        default: ItemIcon;
        /**
         * Trim overlay icon
         */
        icon_trim?: ItemIcon;
        /**
         * Trim palette override
         */
        amethyst_palette?: ItemIcon;
        /**
         * Trim palette override
         */
        copper_palette?: ItemIcon;
        /**
         * Trim palette override
         */
        diamond_palette?: ItemIcon;
        /**
         * Trim palette override
         */
        emerald_palette?: ItemIcon;
        /**
         * Trim palette override
         */
        gold_palette?: ItemIcon;
        /**
         * Trim palette override
         */
        iron_palette?: ItemIcon;
        /**
         * Trim palette override
         */
        lapis_palette?: ItemIcon;
        /**
         * Trim palette override
         */
        quartz_palette?: ItemIcon;
        /**
         * Trim palette override
         */
        netherite_palette?: ItemIcon;
        /**
         * Trim palette override
         */
        redstone_palette?: ItemIcon;
      };
    };
