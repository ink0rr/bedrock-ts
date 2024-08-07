/**
 * Allows the mob to search within an area for a growable crop block. If found, the mob will use any available fertilizer in their inventory on the crop. This goal will not execute if the mob does not have a fertilizer item in its inventory.
 */
export type EntityBehaviorFertilizeFarmBlockComponent = {
  priority?: number;
  /**
   * Distance in blocks within the mob considers it has reached it's target position.
   * @default 1.5
   */
  goal_radius?: number;
  /**
   * The maximum number of times the mob will use fertilzer on the target block.
   * @default 1
   */
  max_fertilizer_usage?: number;
  /**
   * The maximum amount of time in seconds that the goal can take before searching again. The time is chosen between 0 and this number.
   * @default 8
   */
  search_cooldown_max_seconds?: number;
  /**
   * The number of randomly selected blocks each tick that the mob will check within its search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick.
   * @default 9
   */
  search_count?: number;
  /**
   * The Height in blocks the mob will search within to find a valid target position.
   * @default 1
   */
  search_height?: number;
  /**
   * The distance in blocks the mob will search within to find a valid target position.
   * @default 1
   */
  search_range?: number;
  /**
   * Movement speed multiplier of the mob when using this Goal.
   * @default 0.5
   */
  speed_multiplier?: number;
};
