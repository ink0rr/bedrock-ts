// auto generated
import { EntityEventTrigger } from "../entity_behavior/event.js";

/**
 * Adds a cooldown to a mob. The intention of this cooldown is to be used to prevent the mob from attempting to aquire new attack targets.
 */
export type EntityAttackCooldownComponent = {
  /**
   * Amount of time in seconds for the cooldown. Can be specified as a number or a pair of numbers (min and max).
   */
  attack_cooldown_time?: number | [number, number];
  /**
   * Event to be runned when the cooldown is complete.
   */
  attack_cooldown_complete_event?: EntityEventTrigger;
};
