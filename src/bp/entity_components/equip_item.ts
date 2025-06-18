// auto generated
import { ItemIdentifier } from "../../shared/literals/item_identifier.js";

/**
 * The entity puts on the desired equipment.
 */
export type EntityEquipItemComponent = {
  /**
   * List of items that the entity should not equip.
   */
  excluded_items?: Array<{
    item?: ItemIdentifier;
  }>;
};
