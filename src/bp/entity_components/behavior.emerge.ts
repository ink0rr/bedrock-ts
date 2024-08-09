import { EventTrigger } from "../../shared/event_trigger.js";

/**
 * Allows this entity to emerge from the ground.
 */
export type EntityBehaviorEmergeComponent = {
  priority?: number;
  /**
   * Time in seconds the mob has to wait before using the goal again.
   * @default 0.5
   */
  cooldown_time?: number;
  /**
   * Goal duration in seconds.
   * @default 5
   */
  duration?: number;
  /**
   * Trigger to be executed when the goal execution is about to end.
   */
  on_done?: EventTrigger;
};
