import { EventTriggerFiltered } from "../../shared/event_trigger.js";

/**
 * Fires an event when this behavior starts, then waits for a duration before stopping.
 */
export type EntityBehaviorTimerFlag_1Component = {
  priority?: number;
  /**
   * Goal cooldown range in seconds.
   */
  cooldown_range?: Array<number>;
  /**
   * Goal duration range in seconds.
   */
  duration_range?: Array<number>;
  on_start?: EventTriggerFiltered;
  on_end?: EventTriggerFiltered;
};
