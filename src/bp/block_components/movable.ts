// auto generated
/**
 * The description identifier of the movable component
 */
export type BlockMovableComponent = {
  /**
   * How the block reacts to being pushed by another block like a piston.
   */
  movement_type?: "push_pull" | "push" | "popped" | "immovable";
  /**
   * How the block should handle adjacent blocks around it when being pushed by another block like a piston.
   */
  sticky?: "same" | "none";
};
