/**
 * The basic redstone properties of a block
 */
export type BlockRedstoneConductivityComponent = {
  /**
   * Specifies if redstone wire can stair-step downward on the block
   */
  allows_wire_to_step_down?: boolean;
  /**
   * Specifies if the block can be powered by redstone
   */
  redstone_conductor?: boolean;
};
