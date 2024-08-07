import { ItemIdentifier } from "../../shared/item_identifier.js";

/**
 * Repairable item component: Determines which items can be used to repair a defined item, as well as the amount of durability specified items will repair. In format versions prior to 1.20.10, this component requires the 'Holiday Creator Features' experimental toggle.
 */
export type ItemRepairableComponent = {
  /**
   * List of repair item entries.
   */
  repair_items?: Array<{
    items?: Array<ItemIdentifier>;
    repair_amount?: number | string;
  }>;
};
