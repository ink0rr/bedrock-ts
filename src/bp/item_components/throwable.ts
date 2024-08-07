/**
 * Throwable item component. Throwable items, such as a snowball. In format versions prior to 1.20.10, this component requires the 'Holiday Creator Features' experimental toggle.
 */
export type ItemThrowableComponent = {
  /**
   * Whether the item should use the swing animation when thrown.
   */
  do_swing_animation?: boolean;
  /**
   * The scale at which the power of the throw increases
   */
  launch_power_scale?: number;
  /**
   * The maximum duration to draw a throwable item.
   */
  max_draw_duration?: number;
  /**
   * The maximum power to launch the throwable item.
   */
  max_launch_power?: number;
  /**
   * The minimum duration to draw a throwable item.
   */
  min_draw_duration?: number;
  /**
   * Whether or not the power of the throw increases with duration charged. When true, The longer you hold, the more power it will have when released.
   */
  scale_power_by_draw_duration?: boolean;
};
