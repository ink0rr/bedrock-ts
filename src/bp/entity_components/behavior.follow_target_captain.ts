/**
 * Allows mob to move towards its current target captain.
 */
export type EntityBehaviorFollowTargetCaptainComponent = {
  priority?: number;
  /**
   * Movement speed multiplier of the mob when using this AI Goal.
   * @default 1
   */
  speed_multiplier?: number;
  /**
   * Defines the distance in blocks the mob will stay from its target while following.
   */
  follow_distance?: number;
  /**
   * Defines the maximum distance in blocks a mob can get from its target captain before giving up trying to follow it.
   */
  within_radius?: number;
};
