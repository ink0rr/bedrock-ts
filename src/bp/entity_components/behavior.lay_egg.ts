import { EventTrigger } from "../../shared/event_trigger.js";
import { BlockIdentifier } from "../../shared/literals/block_identifier.js";
import { SoundEvent } from "../../shared/sound_event.js";

/**
 * Allows the mob to lay an egg block on a sand block if the mob is pregnant.
 */
export type EntityBehaviorLayEggComponent = {
  priority?: number;
  /**
   * Movement speed multiplier of the mob when using this AI Goal.
   * @default 1
   */
  speed_multiplier?: number;
  /**
   * The distance in blocks it will look for a sand block to move towards.
   */
  search_range?: number;
  /**
   * Height in blocks the mob will look for sand block to move towards.
   * @default 1
   */
  search_height?: number;
  /**
   * The number of blocks each tick that the mob will check within it's search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick.
   */
  search_count?: number;
  /**
   * Distance in blocks within the mob considers it has reached the goal. This is the 'wiggle room' to stop the AI from bouncing back and forth trying to reach a specific spot.
   * @default 0.5
   */
  goal_radius?: number;
  /**
   * Event to run when this mob lays the egg.
   */
  on_lay?: EventTrigger;
  /**
   * Allows the mob to lay its eggs from below the target if it can't get there. This is useful if the target block is water with air above, since mobs may not be able to get to the air block above water.
   */
  allow_laying_from_below?: boolean;
  /**
   * Block type for the egg to lay. If this is a turtle egg, the number of eggs in the block is randomly set.
   * @default minecraft:turtle_egg
   */
  egg_type?: BlockIdentifier;
  /**
   * Sound event name for laying egg. Defaulted to lay_egg which is used for Turtles.
   * @default lay_egg
   */
  lay_egg_sound?: SoundEvent;
  /**
   * Duration of the laying egg process in seconds.
   * @default 10
   */
  lay_seconds?: number;
  /**
   * Blocks that the mob can lay its eggs on top of.
   */
  target_blocks?: Array<BlockIdentifier>;
  /**
   * Types of materials that can exist above the target block.
   */
  target_materials_above_block?: Array<"Air" | "Water" | "Lava">;
  /**
   * Specifies if the default lay-egg animation should be played when the egg is placed or not.
   * @default true
   */
  use_default_animation?: boolean;
};
