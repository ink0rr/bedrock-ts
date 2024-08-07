/**
 * Allows mobs that own a bed to in a village to move to and sleep in it.
 */
export type EntityBehaviorSleepComponent = {
  priority?: number;
  goal_radius?: number;
  /**
   * Time in seconds the mob has to wait before using the goal again.
   */
  cooldown_time?: number;
  /**
   * The cooldown time in seconds before the goal can be reused after a internal failure or timeout condition.
   * @default 8
   */
  timeout_cooldown?: number;
  /**
   * Movement speed multiplier of the mob when using this AI Goal.
   * @default 1
   */
  speed_multiplier?: number;
  /**
   * The height of the mob's collider while sleeping.
   * @default 1
   */
  sleep_collider_height?: number;
  /**
   * The width of the mob's collider while sleeping.
   * @default 1
   */
  sleep_collider_width?: number;
  /**
   * The y offset of the mob's collider while sleeping.
   */
  sleep_y_offset?: number;
  /**
   * If true, the mob will be able to use the sleep goal if riding something.
   */
  can_sleep_while_riding?: boolean;
};
