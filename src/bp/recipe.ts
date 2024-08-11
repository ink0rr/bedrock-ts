import { BlockTag, LiteralUnion, MoLang } from "../shared/index.js";
import { BlockIdentifier } from "../shared/literals/block_identifier.js";
import { ItemIdentifier } from "../shared/literals/item_identifier.js";
import { ItemTag } from "../shared/literals/item_tag.js";

export type Recipe = {
  format_version: string;
} & (
  | RecipeSmithingTrim
  | RecipeSmithingTransform
  | RecipeFurnace
  | RecipeShaped
  | RecipeShapeless
  | RecipeBrewingMix
  | RecipeBrewingContainer
);

export type RecipeSmithingTrim = {
  /**
   * Represents a Smithing Trim Recipe for the Smithing Table. This recipe applies a colored trim pattern to an item, while preserving its other properties.
   */
  "minecraft:recipe_smithing_trim"?: {
    description: {
      identifier: string;
    };
    /**
     * Defines where this recipe can be made.
     */
    tags: Array<
      LiteralUnion<
        | "material_reducer"
        | "blast_furnace"
        | "brewing_stand"
        | "campfire"
        | "cartography_table"
        | "crafting_table"
        | "furnace"
        | "smoker"
        | "stonecutter"
        | "soul_campfire"
        | "smithing_table"
      >
    >;
    /**
     * The template needed to perform the trim operation. It defines the pattern which will be applied to the item. In case of stackable items, only 1 item is consumed. Items must have the 'minecraft:trim_templates' tag to be accepted into the respective UI slot.
     */
    template:
      | ItemIdentifier
      | BlockIdentifier
      | {
          tag?: ItemTag | BlockTag;
        };
    /**
     * The item to trim. Its properties will be preserved. The only accepted items are armors. Items must have the 'minecraft:trimmable_armors' tag to be accepted into the respective UI slot.
     */
    base:
      | ItemIdentifier
      | BlockIdentifier
      | {
          tag?: ItemTag | BlockTag;
        };
    /**
     * The material needed to perform the trim operation. It defines the color in which the pattern will be applied to the item. In case of stackable items, only 1 item is consumed. Items must have the 'minecraft:trim_materials' tag to be accepted into the respective UI slot.
     */
    addition:
      | ItemIdentifier
      | BlockIdentifier
      | {
          tag?: ItemTag | BlockTag;
        };
  };
};

export type RecipeSmithingTransform = {
  /**
   * Represents a Smithing Transform Recipe for the Smithing Table. This recipe transforms an item into another one, while retaining its properties.
   */
  "minecraft:recipe_smithing_transform"?: {
    description: {
      identifier: any;
    };
    /**
     * Defines where this recipe can be made.
     */
    tags: Array<
      LiteralUnion<
        | "material_reducer"
        | "blast_furnace"
        | "brewing_stand"
        | "campfire"
        | "cartography_table"
        | "crafting_table"
        | "furnace"
        | "smoker"
        | "stonecutter"
        | "soul_campfire"
        | "smithing_table"
      >
    >;
    /**
     * The item to transform to.
     */
    result: RecipeResult | Array<RecipeResult>;
    /**
     * The item to transform. It's properties will be copied to 'result'. The only accepted values are armor and tools.
     */
    base: ItemIdentifier | BlockIdentifier;
    /**
     * The template needed to perform the transform operation. In case of stackable items, only 1 item is consumed. Items must have the 'minecraft:transform_templates' tag to be accepted into the respective UI slot.
     */
    template: ItemIdentifier | BlockIdentifier;
    /**
     * The item needed to perform the transform operation. In case of stackable items, only 1 item is consumed. The only accepted value is 'minecraft:netherite_ingot'.
     */
    addition: "minecraft:netherite_ingot";
  };
};

export type RecipeFurnace = {
  /**
   * Represents a recipe for use with a furnace.
   */
  "minecraft:recipe_furnace"?: {
    description: {
      identifier: string;
    };
    /**
     * Defines where this recipe can be made.
     */
    tags: Array<
      LiteralUnion<
        | "material_reducer"
        | "blast_furnace"
        | "brewing_stand"
        | "campfire"
        | "cartography_table"
        | "crafting_table"
        | "furnace"
        | "smoker"
        | "stonecutter"
        | "soul_campfire"
      >
    >;
    group?: string;
    /**
     * Items used as input for the furnace recipe.
     */
    input:
      | ItemIdentifier
      | BlockIdentifier
      | {
          tag?: ItemTag | BlockTag;
        };
    /**
     * Items used as output for the furnace recipe.
     */
    output: ItemIdentifier | BlockIdentifier;
  };
};

export type RecipeShaped = {
  /**
   * Represents a recipe that requires a dedicated pattern when using a crafting table.
   */
  "minecraft:recipe_shaped"?: {
    description: {
      identifier: string;
    };
    /**
     * Defines where this recipe can be made.
     */
    tags: Array<
      LiteralUnion<
        | "material_reducer"
        | "blast_furnace"
        | "brewing_stand"
        | "campfire"
        | "cartography_table"
        | "crafting_table"
        | "furnace"
        | "smoker"
        | "stonecutter"
        | "soul_campfire"
      >
    >;
    group?: string;
    /**
     * Sets the priority order of the recipe. Lower numbers represent a higher priority.
     */
    priority?: number;
    /**
     * Characters that represent a pattern to be defined by keys
     */
    pattern: Array<string>;
    /**
     * Keys to map characters to item names to be used in 'pattern'
     */
    key: Record<
      string,
      {
        item?: ItemIdentifier | BlockIdentifier;
        data?: number | MoLang;
        tag?: ItemTag | BlockTag;
      }
    >;
    unlock?:
      | {
          context?: "None" | "AlwaysUnlocked" | "PlayerInWater" | "PlayerHasManyItems";
        }
      | Array<{
          /**
           * Provides the identifier for the result item.
           */
          item?: ItemIdentifier | BlockIdentifier;
          data?: number | MoLang;
          tag?: ItemTag | BlockTag;
        }>;
    assume_symmetry?: boolean;
    /**
     * When input items match the pattern then these items are the result.
     */
    result: RecipeResult | Array<RecipeResult>;
  };
};

export type RecipeShapeless = {
  /**
   * Represents a recipe that does not require a dedicated pattern.
   */
  "minecraft:recipe_shapeless"?: {
    description: {
      identifier: string;
    };
    /**
     * Defines where this recipe can be made.
     */
    tags: Array<
      LiteralUnion<
        | "material_reducer"
        | "blast_furnace"
        | "brewing_stand"
        | "campfire"
        | "cartography_table"
        | "crafting_table"
        | "furnace"
        | "smoker"
        | "stonecutter"
        | "soul_campfire"
      >
    >;
    group?: string;
    /**
     * Sets the priority order of the recipe. Lower numbers represent a higher priority.
     */
    priority?: number;
    /**
     * Items used as input (without a shape) for the recipe.
     */
    ingredients: Array<{
      /**
       * Provides the identifier for the result item
       */
      item?: ItemIdentifier | BlockIdentifier;
      /**
       * Sets the result item's data value
       */
      data?: number;
      /**
       * Sets how many of the result item should be output
       */
      count?: number;
      tag?: ItemTag | BlockTag;
    }>;
    unlock?:
      | {
          context?: "None" | "AlwaysUnlocked" | "PlayerInWater" | "PlayerHasManyItems";
        }
      | Array<{
          /**
           * Provides the identifier for the result item.
           */
          item?: ItemIdentifier | BlockIdentifier;
          data?: number | MoLang;
          tag?: ItemTag | BlockTag;
        }>;
    /**
     * When the neccessary ingredients have been provided, this will be the result.
     */
    result: RecipeResult | Array<RecipeResult>;
  };
};

export type RecipeBrewingMix = {
  /**
   * Represents a recipe that for use with a Potion Brewing station.
   */
  "minecraft:recipe_brewing_container_mix"?: {
    description: {
      identifier: string;
    };
    /**
     * Defines where this recipe can be made.
     */
    tags: Array<
      LiteralUnion<
        | "material_reducer"
        | "blast_furnace"
        | "brewing_stand"
        | "campfire"
        | "cartography_table"
        | "crafting_table"
        | "furnace"
        | "smoker"
        | "stonecutter"
        | "soul_campfire"
      >
    >;
    /**
     * Input potion used in the brewing container recipe.
     */
    input?: ItemIdentifier | BlockIdentifier;
    /**
     * Output potion from the brewing container recipe.
     */
    output?: ItemIdentifier | BlockIdentifier;
    /**
     * Item used in the brewing container recipe with the input potion.
     */
    reagent?: ItemIdentifier | BlockIdentifier;
  };
};

export type RecipeBrewingContainer = {
  /**
   * Represents a recipe that for use with a potion brewing station.
   */
  "minecraft:recipe_brewing_container"?: {
    description: {
      identifier: string;
    };
    /**
     * Defines where this recipe can be made.
     */
    tags?: Array<
      LiteralUnion<
        | "material_reducer"
        | "blast_furnace"
        | "brewing_stand"
        | "campfire"
        | "cartography_table"
        | "crafting_table"
        | "furnace"
        | "smoker"
        | "stonecutter"
        | "soul_campfire"
      >
    >;
    /**
     * Input potion used in the brewing container recipe.
     */
    input?: ItemIdentifier | BlockIdentifier;
    /**
     * Output potion from the brewing container recipe.
     */
    output?: ItemIdentifier | BlockIdentifier;
    /**
     * Item used in the brewing container recipe with the input potion.
     */
    reagent?: ItemIdentifier | BlockIdentifier;
  };
};

type RecipeResult = {
  /**
   * Provides the identifier for the result item.
   */
  item?: ItemIdentifier | BlockIdentifier;
  /**
   * Sets the result item's data value.
   */
  data?: number;
  /**
   * Sets how many of the result item should be output.
   */
  count?: number;
};
