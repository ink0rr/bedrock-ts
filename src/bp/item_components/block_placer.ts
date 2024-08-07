import { BlockIdentifier } from "../../shared/literals/block_identifier.js";

/**
 * Block Placer item component. Items with this component will place a block when used. Experimental toggles required: Holiday Creator Features (in format versions before 1.20.10).
 */
export type ItemBlockPlacerComponent = {
  /**
   * Defines the block that will be placed.
   */
  block?: BlockIdentifier;
  /**
   * List of block descriptors that contain blocks that this item can be used on. If left empty, all blocks will be allowed. See Custom Item Use Priority for more information on use behavior.
   */
  use_on?: Array<BlockIdentifier>;
};
