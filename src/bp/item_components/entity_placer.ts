// auto generated
import { BlockIdentifier } from "../../shared/literals/block_identifier.js";
import { EntityIdentifier } from "../../shared/literals/entity_identifier.js";

/**
 * Allow this item to place entities
 */
export type ItemEntityPlacerComponent = {
  /**
   * The entity to be placed in the world.
   */
  entity?: EntityIdentifier;
  /**
   * List of block descriptors that contain blocks that this item can be used on. If left empty, all blocks will be allowed.
   */
  use_on?: Array<BlockIdentifier>;
  /**
   * List of block descriptors that contain blocks that this item can be dispensed on. If left empty, all blocks will be allowed.
   */
  dispense_on?: Array<BlockIdentifier>;
};
