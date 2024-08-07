/**
 * Allows the mob to float around like the Ghast.
 */
export type EntityBehaviorFloatWanderComponent = {
  priority?: number;
  /**
   * Range of time in seconds the mob will float around before landing and choosing to do something else.
   */
  float_duration?: Array<number>;
  /**
   * If true, the mob will randomly pick a new point while moving to the previously selected one.
   */
  random_reselect?: boolean;
  /**
   * If true, the point has to be reachable to be a valid target.
   */
  must_reach?: boolean;
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
};
