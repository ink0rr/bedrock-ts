// auto generated
import { BlockIdentifier } from "../../shared/literals/block_identifier.js";

/**
 * Planter item component. planter items are items that can be planted.
 */
export type ItemBlockPlacerComponent = {
  /**
   * Set the placement block name for the planter item.
   */
  block?: BlockIdentifier;
  /**
   * List of block descriptors that contain blocks that this item can be used on. If left empty, all blocks will be allowed.
   */
  use_on?: Array<BlockIdentifier>;
};
