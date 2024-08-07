/**
 * Allows the mob to look around for another mob to ride atop it.
 */
export type EntityBehaviorFindMountComponent = {
  priority?: number;
  /**
   * Distance in blocks within which the mob will look for a mount.
   */
  within_radius?: number;
  /**
   * If true, the mob will not go into water blocks when going towards a mount.
   */
  avoid_water?: boolean;
  /**
   * This is the distance the mob needs to be, in blocks, from the desired mount to mount it. If the value is below 0, the mob will use its default attack distance.
   * @default -1
   */
  mount_distance?: number;
  /**
   * Time the mob will wait before starting to move towards the mount.
   */
  start_delay?: number;
  /**
   * If true, the mob will only look for a mount if it has a target.
   */
  target_needed?: boolean;
  max_failed_attempts?: number;
};
