// auto generated
/**
 * Allows the entity to first travel to a random point on the outskirts of the village, and then explore random points within a small distance. This goal requires 'minecraft:dweller' and 'minecraft:navigation' to execute.
 */
export type EntityBehaviorExploreOutskirtsComponent = {
  priority?: number;
  /**
   * Total distance in blocks the the entity will explore beyond the village bounds when choosing its travel point.
   * @default 5
   */
  explore_dist?: number;
  /**
   * The time the mob will stand around 'searching' for POIs.
   */
  wait_time?: number;
  /**
   * The multiplier for speed while using this goal. 1.0 maintains the speed.
   * @default 1
   */
  speed_multiplier?: number;
  /**
   * A new explore point will randomly be chosen within this XZ distance of the current target position when navigation has finished and the wait timer has elapsed.
   * @default 5
   */
  next_xz?: number;
  /**
   * A new explore point will randomly be chosen within this Y distance of the current target position when navigation has finished and the wait timer has elapsed.
   * @default 3
   */
  next_y?: number;
  /**
   * The wait time in seconds between choosing new explore points will be chosen on a random interval between this value and the maximum wait time.
   * @default 3
   */
  min_wait_time?: number;
  /**
   * The wait time in seconds between choosing new explore points will be chosen on a random interval between this value and the minimum wait time. This value is also the total amount of time the entity will explore random points before the goal stops.
   */
  max_wait_time?: number;
  /**
   * This is the maximum amount of time an entity will attempt to reach it's travel point on the outskirts of the village before the goal exits.
   * @default 60
   */
  max_travel_time?: number;
  /**
   * The minimum perimeter of the village required to run this goal.
   * @default 1
   */
  min_perimeter?: number;
  /**
   * The entity must be within this distance for it to consider it has successfully reached its target.
   * @default 2.2
   */
  min_dist_from_target?: number;
  /**
   * Each new explore point will be chosen on a random interval between the minimum and the maximum wait time, divided by this value. This does not apply to the first explore point chosen when the goal runs.
   * @default 2
   */
  timer_ratio?: number;
  /**
   * The distance from the boundary the villager must be within in to explore the outskirts.
   */
  dist_from_boundary?: [number, number, number];
};
