/**
 * Allows mobs with the dweller component to move toward their Village area that the mob should be restricted to.
 */
export type EntityBehaviorMoveTowardsDwellingRestrictionComponent = {
  priority?: number;
  /**
   * This multiplier modifies the entity's speed when moving towards it's restriction.
   * @default 1
   */
  speed_multiplier?: number;
  control_flags?: "move" | "look";
};
