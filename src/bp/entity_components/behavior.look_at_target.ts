/**
 * Allows the mob to look at the entity they are targetting.
 */
export type EntityBehaviorLookAtTargetComponent = {
  priority?: number;
  /**
   * The angle in degrees that the mob can see in the Y-axis (up-down).
   * @default 360
   */
  angle_of_view_horizontal?: number;
  /**
   * The angle in degrees that the mob can see in the X-axis (left-right).
   * @default 360
   */
  angle_of_view_vertical?: number;
  /**
   * The distance in blocks from which the entity will look at.
   * @default 8
   */
  look_distance?: number;
  /**
   * Time range to look at the entity.
   */
  look_time?: [number, number];
  /**
   * The probability of looking at the target. A value of 1.00 is 100%.
   * @default 0.02
   */
  probability?: number;
};
