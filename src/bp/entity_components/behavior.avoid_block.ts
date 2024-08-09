import { EventTrigger } from "../../shared/event_trigger.js";
import { BlockIdentifier } from "../../shared/literals/block_identifier.js";
import { SoundEvent } from "../../shared/sound_event.js";

/**
 * Allows this entity to avoid certain blocks.
 */
export type EntityBehaviorAvoidBlockComponent = {
  priority?: number;
  /**
   * Should start tick interval.
   * @default 1
   */
  tick_interval?: number;
  /**
   * Maximum distance to look for a block in xz.
   */
  search_range?: number;
  /**
   * Maximum distance to look for a block in y.
   */
  search_height?: number;
  /**
   * Modifier for walking speed. 1.0 means keep the regular speed, while higher numbers make the walking speed faster.
   * @default 1
   */
  walk_speed_modifier?: number;
  /**
   * Modifier for sprint speed. 1.0 means keep the regular speed, while higher numbers make the sprint speed faster.
   * @default 1
   */
  sprint_speed_modifier?: number;
  /**
   * Block search method.
   */
  target_selection_method?: string;
  /**
   * List of block types this mob avoids.
   */
  target_blocks?: Array<BlockIdentifier>;
  /**
   * Escape trigger.
   */
  on_escape?: EventTrigger | Array<EventTrigger>;
  /**
   * The sound event to play when the mob is avoiding a block.
   */
  avoid_block_sound?: SoundEvent;
  /**
   * The range of time in seconds to randomly wait before playing the sound again.
   */
  sound_interval?:
    | number
    | {
        range_min?: number;
        range_max?: number;
      };
};
