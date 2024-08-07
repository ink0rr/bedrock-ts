import { ItemIdentifier } from "../../shared/literals/item_identifier.js";

/**
 * Defines what items can be used to control this entity while ridden.
 */
export type EntityItemControllableComponent = {
  control_items?: Array<ItemIdentifier> | ItemIdentifier;
};
