import { EntityEventTrigger } from "../entity_behavior/event.js";

/**
 * Allows this entity to celebrate surviving a raid by shooting fireworks.
 */
export type EntityBehaviorCelebrateSurviveComponent = {
  priority?: number;
  /**
   * The duration in seconds that the celebration lasts for.
   * @default 30
   */
  duration?: number;
  /**
   * Minimum and maximum time between firework (positive, in seconds).
   */
  fireworks_interval?: {
    range_min?: number;
    range_max?: number;
  };
  /**
   * The event to trigger when the goal's duration expires.
   */
  on_celebration_end_event?: EntityEventTrigger;
};
