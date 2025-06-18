// auto generated
/**
 * Allows the mob to float around like the Ghast.
 */
export type EntityBehaviorFloatWanderComponent = {
  priority?: number;
  /**
   * If true, the mob will have an additional buffer zone around it to avoid collisions with blocks when picking a position to wander to.
   */
  additional_collision_buffer?: boolean;
  /**
   * If true, allows the mob to navigate through liquids on its way to the target position.
   */
  allow_navigating_through_liquids?: boolean;
  /**
   * Range of time in seconds the mob will float around before landing and choosing to do something else.
   */
  float_duration?: Array<number>;
  /**
   * If true, the MoveControl flag will be added to the behavior which means that it can no longer be active at the same time as other behaviors with MoveControl.
   * @default true
   */
  float_wander_has_move_control?: boolean;
  /**
   * If true, the point has to be reachable to be a valid target.
   */
  must_reach?: boolean;
  /**
   * If true, will prioritize finding random positions in the vicinity of surfaces, i.e. blocks that are not Air or Liquid.
   */
  navigate_around_surface?: boolean;
  /**
   * If true, the mob will randomly pick a new point while moving to the previously selected one.
   */
  random_reselect?: boolean;
  /**
   * The horizontal distance in blocks that the goal will check for a surface from a candidate position. Only valid when 'navigate_around_surface' is true.
   */
  surface_xz_dist?: number;
  /**
   * The vertical distance in blocks that the goal will check for a surface from a candidate position. Only valid when 'navigate_around_surface' is true.
   */
  surface_y_dist?: number;
  /**
   * If true, the mob will respect home position restrictions when choosing new target positions. If false, it will choose target position without considering home restrictions.
   * @default true
   */
  use_home_position_restriction?: boolean;
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
