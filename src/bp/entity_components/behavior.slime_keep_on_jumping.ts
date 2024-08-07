/**
 * Allows the entity to continuously jump around like a slime.
 */
export type EntityBehaviorSlimeKeepOnJumpingComponent = {
  priority?: number;
  /**
   * Determines the multiplier this entity's speed is modified by when jumping around.
   * @default 1
   */
  speed_multiplier?: number;
};
