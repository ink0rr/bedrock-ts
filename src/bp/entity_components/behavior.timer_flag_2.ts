import { EntityEventTrigger } from "../entity_behavior/event.js";

/**
 * Fires an event when this behavior starts, then waits for a duration before stopping.
 */
export type EntityBehaviorTimerFlag_2Component = {
  priority?: number;
  /**
   * Goal cooldown range in seconds.
   */
  cooldown_range?: Array<number>;
  /**
   * Goal duration range in seconds.
   */
  duration_range?: Array<number>;
  on_start?: EntityEventTrigger;
  on_end?: EntityEventTrigger;
};
