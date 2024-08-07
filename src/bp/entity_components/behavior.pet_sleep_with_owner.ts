/**
 * Allows the pet mob to move onto a bed with it's owner while sleeping.
 */
export type EntityBehaviorPetSleepWithOwnerComponent = {
  priority?: number;
  /**
   * Distance in blocks within the mob considers it has reached the goal. This is the 'wiggle room' to stop the AI from bouncing back and forth trying to reach a specific spot.
   * @default 0.5
   */
  goal_radius?: number;
  /**
   * Height in blocks from the owner the pet can be to sleep with owner.
   * @default 1
   */
  search_height?: number;
  /**
   * The distance in blocks from the owner the pet can be to sleep with owner.
   */
  search_range?: number;
  search_radius?: number;
  /**
   * Movement speed multiplier of the mob when using this AI Goal.
   * @default 1
   */
  speed_multiplier?: number;
};
