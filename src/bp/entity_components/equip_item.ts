// auto generated
import { ItemIdentifier } from "../../shared/literals/item_identifier.js";

/**
 * The entity puts on the desired equipment.
 */
export type EntityEquipItemComponent = {
  /**
   * Specifies if equipped armor should be added to the armor slot or hand slot
   * @default true
   */
  can_wear_armor?: boolean;
  /**
   * List of items that the entity should not equip.
   */
  excluded_items?: Array<{
    item?: ItemIdentifier;
  }>;
};
