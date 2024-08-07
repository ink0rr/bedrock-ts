import { ItemIdentifier } from "../../shared/literals/item_identifier.js";

/**
 * Allows this mob to charge and use their held item.
 */
export type EntityBehaviorChargeHeldItemComponent = {
  priority?: number;
  /**
   * The list of items that can be used to charge the held item. This list is required and must have at least one item in it.
   */
  items?: Array<ItemIdentifier>;
};
