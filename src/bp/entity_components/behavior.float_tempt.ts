// auto generated
import { ItemIdentifier } from "../../shared/literals/item_identifier.js";
import { SoundEvent } from "../../shared/sound_event.js";
import { EntityEventTrigger } from "../entity_behavior/event.js";

/**
 * Allows the mob to be tempted by food they like.
 */
export type EntityBehaviorFloatTemptComponent = {
  priority?: number;
  /**
   * If true, the mob can stop being tempted if the player moves too fast while close to this mob.
   */
  can_get_scared?: boolean;
  /**
   * If true, vertical distance to the player will be considered when tempting.
   */
  can_tempt_vertically?: boolean;
  /**
   * If true, the mob can be tempted even if it has a passenger (i.e. if being ridden).
   */
  can_tempt_while_ridden?: boolean;
  /**
   * List of items this mob is tempted by.
   */
  items?: Array<ItemIdentifier>;
  /**
   * The event to trigger when the goal starts.
   */
  on_tempt_start?: EntityEventTrigger;
  /**
   * The event to trigger when the goal ends.
   */
  on_tempt_end?: EntityEventTrigger;
  /**
   * Range of random ticks to wait between tempt sounds.
   */
  sound_interval?: {
    range_min?: number;
    range_max?: number;
  };
  /**
   * Movement speed multiplier of the mob when using this AI Goal.
   * @default 1
   */
  speed_multiplier?: number;
  /**
   * The distance at which the mob will stop following the player.
   * @default 1.5
   */
  stop_distance?: number;
  /**
   * Sound to play while the mob is being tempted.
   */
  tempt_sound?: SoundEvent;
  /**
   * Distance in blocks this mob can get tempted by a player holding an item they like.
   */
  within_radius?: number;
};
