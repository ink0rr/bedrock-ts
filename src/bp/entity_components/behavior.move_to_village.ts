// auto generated
/**
 * Allows the mob to move into a random location within a village.
 */
export type EntityBehaviorMoveToVillageComponent = {
  priority?: number;
  /**
   * Movement speed multiplier of the mob when using this AI Goal.
   */
  speed_multiplier?: number;
  /**
   * Distance in blocks within the mob considers it has reached the goal. This is the 'wiggle room' to stop the AI from bouncing back and forth trying to reach a specific spot.
   */
  goal_radius?: number;
  /**
   * The distance in blocks to search for villages. If <= 0, find the closest village regardless of distance.
   */
  search_range?: number;
  /**
   * Time in seconds the mob has to wait before using the goal again.
   */
  cooldown_time?: number;
};
