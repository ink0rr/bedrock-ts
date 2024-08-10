// auto generated
import { ItemIdentifier } from "../../shared/literals/item_identifier.js";
import { MoLang } from "../../shared/molang.js";

/**
 * Repairable item component: how much damage can this item repair, what items can repair it.
 */
export type ItemRepairableComponent = {
  /**
   * Repair item entries.
   */
  repair_items?: Array<{
    items?: Array<ItemIdentifier>;
    repair_amount?: MoLang;
  }>;
};
