/**
 * Allows the mob to seek shade.
 */
export type EntityBehaviorFindCoverComponent = {
  priority?: number;
  /**
   * Movement speed multiplier of the mob when using this AI Goal.
   * @default 1
   */
  speed_multiplier?: number;
  /**
   * Time in seconds the mob has to wait before using the goal again.
   */
  cooldown_time?: number;
};
