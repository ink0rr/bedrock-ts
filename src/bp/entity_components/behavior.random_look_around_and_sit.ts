// auto generated
/**
 * Allows the mob to randomly sit and look around for a duration. Note: Must have a sitting animation set up to use this.
 */
export type EntityBehaviorRandomLookAroundAndSitComponent = {
  priority?: number;
  /**
   * The min amount of unique looks a mob will have while looking around.
   * @default 1
   */
  min_look_count?: number;
  /**
   * The max amount of unique looks a mob will have while looking around.
   * @default 2
   */
  max_look_count?: number;
  /**
   * The min amount of time (in ticks) a mob will stay looking at a direction while looking around.
   * @default 20
   */
  min_look_time?: number;
  /**
   * The max amount of time (in ticks) a mob will stay looking at a direction while looking around.
   * @default 40
   */
  max_look_time?: number;
  /**
   * The probability of randomly looking around/sitting.
   * @default 0.02
   */
  probability?: number;
  /**
   * If the goal should continue to be used as long as the mob is leashed.
   */
  continue_if_leashed?: boolean;
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
  /**
   * The cooldown in seconds before the goal can be used again.
   */
  random_look_around_cooldown?: number;
};
