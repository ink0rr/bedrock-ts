import { EventTriggerFiltered } from "../../shared/event_trigger.js";
import { SoundEvent } from "../../shared/sound_event.js";

/**
 * The entity will attempt to toss the items from its inventory to a nearby recently played noteblock.
 */
export type EntityBehaviorGoAndGiveItemsToNoteblockComponent = {
  priority?: number;
  /**
   * Sets the time an entity should continue delivering items to a noteblock after hearing it.
   */
  listen_time?: number;
  /**
   * Event(s) to run when this mob throws items.
   */
  on_item_throw?: Array<EventTriggerFiltered> | EventTriggerFiltered;
  /**
   * Sets the desired distance to be reached before throwing the items towards the block.
   * @default 3
   */
  reach_block_distance?: number;
  /**
   * Sets the entity's speed when running toward the block.
   * @default 1
   */
  run_speed?: number;
  /**
   * Sets the throw force.
   * @default 0.2
   */
  throw_force?: number;
  /**
   * Sets the vertical throw multiplier that is applied on top of the throw force in the vertical direction.
   * @default 1.5
   */
  vertical_throw_mul?: number;
  /**
   * Sound to play when this mob throws an item.
   */
  throw_sound?: SoundEvent;
};
