import { BlockIdentifier } from "../../shared/block_identifier.js";

/**
 * Specifies the blocks that this entity can break as it moves around.
 */
export type EntityBreakBlocksComponent = {
  /**
   * A list of the blocks that can be broken as this entity moves around.
   */
  breakable_blocks?: Array<BlockIdentifier>;
};
