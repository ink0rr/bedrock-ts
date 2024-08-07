/**
 * Allows the mob to randomly look around.
 */
export type EntityBehaviorRandomLookAroundComponent = {
  priority?: number;
  look_time?: [number, number];
  look_distance?: number;
  /**
   * The rightmost angle a mob can look at on the horizontal plane with respect to its initial facing direction.
   * @default 30
   */
  max_angle_of_view_horizontal?: number;
  /**
   * The leftmost angle a mob can look at on the horizontal plane with respect to its initial facing direction.
   * @default -30
   */
  min_angle_of_view_horizontal?: number;
};
