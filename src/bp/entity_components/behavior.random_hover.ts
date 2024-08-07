/**
 * Allows the mob to hover around randomly, close to the surface.
 */
export type EntityBehaviorRandomHoverComponent = {
  priority?: number;
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
   * Height in blocks to add to the selected target position.
   */
  y_offset?: number;
  /**
   * A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal.
   * @default 120
   */
  interval?: number;
  /**
   * The height above the surface which the mob will try to maintain.
   */
  hover_height?: Array<number>;
};
