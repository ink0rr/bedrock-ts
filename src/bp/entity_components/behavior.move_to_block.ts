import { BlockIdentifier } from "../../shared/literals/block_identifier.js";
import { EventTriggerFiltered } from "../../shared/event_trigger.js";
import { Filter } from "../../shared/filter.js";

/**
 * Allows mob to move towards a certain block.
 */
export type EntityBehaviorMoveToBlockComponent = {
  priority?: number;
  /**
   * Movement speed multiplier of the mob when using this AI Goal.
   * @default 1
   */
  speed_multiplier?: number;
  /**
   * Average interval in ticks to try to run this behavior.
   * @default 20
   */
  tick_interval?: number;
  /**
   * Chance to start the behavior (applied after each random tick_interval).
   * @default 1
   */
  start_chance?: number;
  /**
   * The height in blocks that the mob will look for the block.
   */
  search_range?: number;
  /**
   * The height in blocks that the mob will look for the block.
   * @default 1
   */
  search_height?: number;
  /**
   * Distance in blocks within the mob considers it has reached the goal. This is the 'wiggle room' to stop the AI from bouncing back and forth trying to reach a specific spot.
   * @default 0.5
   */
  goal_radius?: number;
  /**
   * Number of ticks needed to complete a stay at the block.
   */
  stay_duration?: number;
  /**
   * Kind of block to find fitting the specification.
   * @default nearest
   */
  target_selection_method?: "nearest" | "random";
  /**
   * Offset to add to the selected target position.
   */
  target_offset?: Array<number>;
  /**
   * Block types to move to.
   */
  target_blocks?: Array<BlockIdentifier>;
  /**
   * Event to run on block reached.
   */
  on_stay_completed?: EventTriggerFiltered | Array<EventTriggerFiltered>;
  /**
   * Event to run on block reached.
   */
  on_reach?: EventTriggerFiltered | Array<EventTriggerFiltered>;
  /**
   * Filter which blocks can be targeted.
   */
  target_block_filters?: Filter | Array<Filter>;
};
