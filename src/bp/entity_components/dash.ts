/**
 * Ability for a ridable entity to dash.
 */
export type EntityDashComponent = {
  /**
   * The dash cooldown in seconds.
   * @default 1
   */
  cooldown_time?: number;
  /**
   * Horizontal momentum of the dash.
   * @default 1
   */
  horizontal_momentum?: number;
  /**
   * Vertical momentum of the dash.
   * @default 1
   */
  vertical_momentum?: number;
};
