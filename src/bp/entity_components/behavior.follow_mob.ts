// auto generated
/**
 * Allows the mob to follow other mobs.
 */
export type EntityBehaviorFollowMobComponent = {
  priority?: number;
  /**
   * Movement speed multiplier of the mob when using this AI Goal.
   * @default 1
   */
  speed_multiplier?: number;
  /**
   * The distance in blocks that the owner can be away from this mob before it starts following it.
   */
  start_distance?: number;
  /**
   * The distance in blocks this mob will stop from its owner while following it.
   * @default 2
   */
  stop_distance?: number;
  /**
   * The distance in blocks it will look for a mob to follow.
   */
  search_range?: number;
};
