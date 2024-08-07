/**
 * Allows the mob to follow the player that owns them.
 */
export type EntityBehaviorFollowOwnerComponent = {
  priority?: number;
  /**
   * Movement speed multiplier of the mob when using this AI Goal.
   * @default 1
   */
  speed_multiplier?: number;
  /**
   * The distance in blocks that the owner can be away from this mob before it starts following it.
   * @default 10
   */
  start_distance?: number;
  /**
   * The distance in blocks this mob will stop from its owner while following it.
   * @default 2
   */
  stop_distance?: number;
  /**
   * Specify if the mob can teleport to the player if it is too far away.
   */
  can_teleport?: boolean;
  /**
   * Specify if the mob will follow the owner if it has heard a vibration lately.
   * @default true
   */
  ignore_vibration?: boolean;
  /**
   * The maximum distance in blocks this mob can be from its owner to start following, only used when canTeleport is false.
   * @default 60
   */
  max_distance?: number;
};
