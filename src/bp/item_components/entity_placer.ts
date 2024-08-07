import { BlockIdentifier } from "../../shared/literals/block_identifier.js";
import { EntityIdentifier } from "../../shared/literals/entity_identifier.js";

/**
 * Allows the item to place specified entities into the world. In format versions prior to 1.20.0, this component requires the 'Holiday Creator Features' experimental toggle.
 */
export type ItemEntityPlacerComponent = {
  /**
   * List of block descriptors that contain blocks that this item can be dispensed on. If left empty, all blocks will be allowed.
   */
  dispense_on?: Array<BlockIdentifier>;
  /**
   * The entity to be placed in the world.
   */
  entity?: EntityIdentifier;
  /**
   * List of block descriptors that contain blocks that this item can be used on. If left empty, all blocks will be allowed. See Custom Item Use Priority for more information on use behavior.
   */
  use_on?: Array<BlockIdentifier>;
};
