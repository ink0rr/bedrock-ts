import { SoundEvent } from "../../shared/sound_event.js";
import { EntityEventTrigger } from "../entity_behavior/event.js";

/**
 * Sets the vertical throw force.
 */
export type EntityBehaviorGoAndGiveItemsToOwnerComponent = {
  priority?: number;
  /**
   * Event(s) to run when this mob throws items.
   */
  on_item_throw?: Array<EntityEventTrigger> | EntityEventTrigger;
  /**
   * Sets the desired distance to be reached before giving items to owner.
   * @default 3
   */
  reach_mob_distance?: number;
  /**
   * Sets the entity's speed when running toward the owner.
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
