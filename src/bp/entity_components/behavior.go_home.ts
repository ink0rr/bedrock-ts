import { EntityEventTrigger } from "../entity_behavior/event.js";

/**
 * Allows the mob to move back to the position they were spawned.
 */
export type EntityBehaviorGoHomeComponent = {
  priority?: number;
  /**
   * Movement speed multiplier of the mob when using this AI Goal.
   * @default 1
   */
  speed_multiplier?: number;
  /**
   * A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal.
   * @default 120
   */
  interval?: number;
  /**
   * Distance in blocks within the mob considers it has reached the goal. This is the 'wiggle room' to stop the AI from bouncing back and forth trying to reach a specific spot.
   * @default 0.5
   */
  goal_radius?: number;
  /**
   * Event to run when this mob gets home.
   */
  on_home?: EntityEventTrigger | Array<EntityEventTrigger>;
  /**
   * Event to run if this entity fails to get home.
   */
  on_failed?: EntityEventTrigger | Array<EntityEventTrigger>;
  /**
   * Specify a distance in blocks that the mob is considered close enough to the end of the current path. A new path will then be calculated to continue toward home.
   * @default 2
   */
  calculate_new_path_radius?: number;
};
