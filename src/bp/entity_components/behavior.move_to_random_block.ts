// auto generated
/**
 * Allows mob to move towards a random block.
 */
export type EntityBehaviorMoveToRandomBlockComponent = {
  priority?: number;
  speed_multiplier?: number;
  /**
   * Defines the distance in blocks the mob has to be from the block for the movement to be finished.
   */
  within_radius?: number;
  /**
   * Defines the distance from the mob, in blocks, that the block to move to will be chosen.
   * @default 16
   */
  block_distance?: number;
};
