/**
 * Allows this entity to roar at another entity based on data in minecraft:anger_level. Once the anger threshold specified in minecraft:anger_level has been reached, this entity will roar for the specified amount of time, look at the other entity, apply anger boost towards it, and finally target it.
 */
export type EntityBehaviorRoarComponent = {
  priority?: number;
  /**
   * The amount of time to roar for.
   */
  duration?: number;
};
