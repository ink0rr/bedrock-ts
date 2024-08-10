// auto generated
import { EntityBehaviorType } from "../entity_behavior/type.js";

/**
 * Allows the mob to give items it has to others.
 */
export type EntityBehaviorShareItemsComponent = {
  priority?: number;
  /**
   * Maximum distance in blocks this mob will look for entities to share items with.
   */
  max_dist?: number;
  /**
   * Distance in blocks within the mob considers it has reached the goal. This is the 'wiggle room' to stop the AI from bouncing back and forth trying to reach a specific spot.
   * @default 0.5
   */
  goal_radius?: number;
  /**
   * Movement speed multiplier of the mob when using this AI Goal.
   * @default 1
   */
  speed_multiplier?: number;
  entity_types?: EntityBehaviorType;
};
