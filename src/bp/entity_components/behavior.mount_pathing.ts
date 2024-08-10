// auto generated
/**
 * Allows the mob to move around on its own while mounted seeking a target to attack.
 */
export type EntityBehaviorMountPathingComponent = {
  priority?: number;
  /**
   * Movement speed multiplier of the mob when using this AI Goal.
   * @default 1
   */
  speed_multiplier?: number;
  /**
   * The distance at which this mob wants to be away from its target.
   */
  target_dist?: number;
  /**
   * If true, this mob will chase after the target as long as it's a valid target.
   */
  track_target?: boolean;
};
