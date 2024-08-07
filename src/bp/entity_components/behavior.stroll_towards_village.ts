/**
 * Allows the mob to move into a random location within a village within the search range.
 */
export type EntityBehaviorStrollTowardsVillageComponent = {
  priority?: number;
  /**
   * Time in seconds the mob has to wait before using the goal again.
   */
  cooldown_time?: number;
  /**
   * Distance in blocks within the mob considers it has reached the goal. This is the 'wiggle room' to stop the AI from bouncing back and forth trying to reach a specific spot.
   * @default 0.5
   */
  goal_radius?: number;
  /**
   * The distance in blocks to search for points inside villages. If <= 0, find the closest village regardless of distance.
   */
  search_range?: number;
  /**
   * Movement speed multiplier of the mob when using this AI Goal.
   * @default 1
   */
  speed_multiplier?: number;
  /**
   * This is the chance that the mob will start this goal, from 0 to 1.
   * @default 0.1
   */
  start_chance?: number;
};
