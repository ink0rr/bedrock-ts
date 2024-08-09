import { EntityEventTrigger } from "../entity_behavior/event.js";

/**
 * Allows this entity to dig into the ground before despawning.
 */
export type EntityBehaviorDigComponent = {
  priority?: number;
  /**
   * If true, this behavior can run when this entity is named. Otherwise not.
   */
  allow_dig_when_named?: boolean;
  /**
   * Indicates that the actor should start digging when it sees daylight.
   */
  digs_in_daylight?: boolean;
  /**
   * Goal duration in seconds.
   */
  duration?: number;
  /**
   * The minimum idle time in seconds between the last detected disturbance to the start of digging.
   */
  idle_time?: number;
  /**
   * If true, finding new suspicious locations count as disturbances that may delay the start of this goal.
   */
  suspicion_is_disturbance?: boolean;
  /**
   * If true, vibrations count as disturbances that may delay the start of this goal.
   */
  vibration_is_disturbance?: boolean;
  /**
   * Event(s) to run when the goal starts.
   */
  on_start?: EntityEventTrigger;
};
