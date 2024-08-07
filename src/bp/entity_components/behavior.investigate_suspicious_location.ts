/**
 * Allows this entity to move towards a 'suspicious' position based on data gathered in minecraft:suspect_tracking.
 */
export type EntityBehaviorInvestigateSuspiciousLocationComponent = {
  priority?: number;
  /**
   * Distance in blocks within the entity considers it has reached it's target position.
   * @default 1.5
   */
  goal_radius?: number;
  /**
   * Movement speed multiplier.
   * @default 1
   */
  speed_multiplier?: number;
};
