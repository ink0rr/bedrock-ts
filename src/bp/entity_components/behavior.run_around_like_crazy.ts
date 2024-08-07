/**
 * Allows the mob to run around aimlessly.
 */
export type EntityBehaviorRunAroundLikeCrazyComponent = {
  priority?: number;
  /**
   * Movement speed multiplier of the mob when using this AI Goal.
   * @default 1
   */
  speed_multiplier?: number;
};
