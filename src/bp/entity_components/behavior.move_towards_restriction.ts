/**
 * Allows Guardians, Iron Golems and Villagers to move within their pre-defined area that the mob should be restricted to. Other mobs don't have a restriction defined.
 */
export type EntityBehaviorMoveTowardsRestrictionComponent = {
  priority?: number;
  /**
   * Movement speed multiplier of the mob when using this AI Goal.
   */
  speed_multiplier?: number;
  control_flags?: "move" | "look";
};
