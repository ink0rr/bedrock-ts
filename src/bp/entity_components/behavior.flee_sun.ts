/**
 * Allows the mob to run away from direct sunlight and seek shade.
 */
export type EntityBehaviorFleeSunComponent = {
  priority?: number;
  /**
   * Movement speed multiplier of the mob when using this AI Goal.
   * @default 1
   */
  speed_multiplier?: number;
};
