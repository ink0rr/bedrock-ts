/**
 * Allows monsters to jump at and attack their target. Can only be used by hostile mobs.
 */
export type EntityBehaviorLeapAtTargetComponent = {
  priority?: number;
  set_persistent?: boolean;
  target_dist?: number;
  /**
   * If true, the mob will only jump at its target if its on the ground. Setting it to false will allow it to jump even if its already in the air.
   * @default true
   */
  must_be_on_ground?: boolean;
  /**
   * The height in blocks the mob jumps when leaping at its target.
   */
  yd?: number;
};
