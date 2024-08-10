// auto generated
/**
 * Allows an entity to randomly move through water.
 */
export type EntityBehaviorRandomSwimComponent = {
  priority?: number;
  /**
   * A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal.
   * @default 120
   */
  interval?: number;
  /**
   * Movement speed multiplier of the mob when using this AI Goal.
   * @default 1
   */
  speed_multiplier?: number;
  /**
   * Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1.
   * @default 10
   */
  xz_dist?: number;
  /**
   * Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1.
   * @default 7
   */
  y_dist?: number;
  /**
   * If true, the mob will avoid surface water blocks by swimming below them.
   * @default true
   */
  avoid_surface?: boolean;
};
