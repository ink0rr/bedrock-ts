// auto generated
/**
 * Allows this entity to move outdoors.
 */
export type EntityBehaviorMoveOutdoorsComponent = {
  priority?: number;
  /**
   * The radius away from the target block to count as reaching the goal.
   * @default 0.5
   */
  goal_radius?: number;
  /**
   * The amount of times to try finding a random outdoors position before failing.
   */
  search_count?: number;
  /**
   * The y range to search for an outdoors position for.
   */
  search_height?: number;
  /**
   * The x and z range to search for an outdoors position for.
   */
  search_range?: number;
  /**
   * The movement speed modifier to apply to the entity while it is moving outdoors.
   * @default 0.5
   */
  speed_multiplier?: number;
  /**
   * The cooldown time in seconds before the goal can be reused after pathfinding fails.
   * @default 8
   */
  timeout_cooldown?: number;
};
