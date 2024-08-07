/**
 * Allows this entity to move indoors.
 */
export type EntityBehaviorMoveIndoorsComponent = {
  priority?: number;
  /**
   * The movement speed modifier to apply to the entity while it is moving indoors.
   * @default 0.8
   */
  speed_multiplier?: number;
  /**
   * The cooldown time in seconds before the goal can be reused after pathfinding fails.
   * @default 8
   */
  timeout_cooldown?: number;
};
