import { CreativeCategory } from "../shared/creative_category.js";
import { ItemGroup } from "../shared/item_group.js";
import { MoLang } from "../shared/molang.js";
import { BlockComponents } from "./block_components/index.js";

export type Block = {
  "minecraft:block"?: {
    description: BlockDescription;
    components?: BlockComponents;
    /**
     * List of block permutations based on MoLang queries
     */
    permutations?: Array<{
      /**
       * MoLang condition
       */
      condition?: MoLang;
      /**
       * Components to add when the condition evaluates to 'true'
       */
      components?: BlockComponents;
    }>;
  };
};

export type BlockTraits = {
  /**
   * This can add states containing information about the player's rotation when the block is placed. For example, if a block using placement_direction is placed while the player is facing south, the state value will be "south".
   */
  "minecraft:placement_direction"?: {
    /**
 * This can add states containing information about the player's rotation when the block is placed.
minecraft:cardinal_direction is a 4-value state containing the cardinal-facing direction of the player when the block was placed. The values for this state are 'north', 'south', 'east', and 'west'.
minecraft:facing_direction is a 6-value state containing the overall direction of the player when the block was placed. The values for this state are 'down', 'up', 'north', 'south', 'east', and 'west'.
 */
    enabled_states?: Array<"minecraft:cardinal_direction" | "minecraft:facing_direction">;
    /**
 * This is the amount of rotation the block will be rotated by when placed.
(degrees)
 */
    y_rotation_offset?: number;
  };
  /**
   * This contains information about where the player placed the block. This allows a block to replicate the upside-down placement of slabs and stairs, as well as the attachment behavior of torches and vines.
   */
  "minecraft:placement_position"?: {
    /**
 * This can add states containing information about the player's rotation when the block is placed.
minecraft:block_face is a 6-value state representing the face on which the block was placed. Values for this state are 'up', 'down', 'north', 'south', 'east', and 'west'. For example, if a block using the minecraft:block_face is placed on the south face of a neighboring block, the state value will be 'south'.
minecraft:vertical_half is a 2-value state specifying whether a block was placed in the top or bottom half of a block. The values for this state are 'bottom' and 'top'. For blocks using minecraft:vertical_half, if the block is placed on the 'down' face of a block or above the midline of a horizontal face, the state value will be 'top'.
 */
    enabled_states?: Array<"minecraft:block_face" | "minecraft:vertical_half">;
  };
};

/**
 * Set required block information
 */
export type BlockDescription = {
  /**
   * The identifier for this item. The name must include a namespace and must not use the Minecraft namespace unless overriding a Vanilla item.
   */
  identifier: string;
  /**
   * If this item is experimental, it will only be registered if the world is marked as experimental.
   */
  is_experimental?: boolean;

  /**
   * Define block states and their possible values
   */
  states?: Record<string, Array<MoLang>>;
  menu_category?: {
    group?: CreativeCategory | ItemGroup;
    /**
     * Determines which category this block will be placed under in the inventory and crafting table container screens. Options are 'construction', 'nature', 'equipment', 'items', and 'none'. If omitted or 'none' is specified, the block will not appear in the inventory or crafting table container screens.
     */
    category?: CreativeCategory;
    is_hidden_in_commands?: boolean;
  };
  /**
   * Block traits are designed to be a shortcut for creators to use Vanilla block states without needing to define and manage a series of events or triggers on custom blocks.
   */
  traits?: BlockTraits;
};
