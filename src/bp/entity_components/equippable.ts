// auto generated
import { ItemDescriptor } from "../../shared/item_descriptor.js";
import { ActionText } from "../../shared/literals/action_text.js";
import { ItemIdentifier } from "../../shared/literals/item_identifier.js";
import { EntityEventTrigger } from "../entity_behavior/event.js";

/**
 * Defines an entity's behavior for having items equipped to it.
 */
export type EntityEquippableComponent = {
  /**
   * List of slots and the item that can be equipped.
   */
  slots?: Array<{
    /**
     * The list of items that can go in this slot.
     */
    accepted_items?: Array<ItemDescriptor>;
    /**
     * Text to be displayed when the entity can be equipped with this item when playing with Touch-screen controls.
     */
    interact_text?: ActionText;
    /**
     * Identifier of the item that can be equipped for this slot.
     */
    item?: ItemIdentifier;
    /**
     * Event to trigger when this entity is equipped with this item.
     */
    on_equip?: EntityEventTrigger;
    /**
     * Event to trigger when this item is removed from this entity.
     */
    on_unequip?: EntityEventTrigger;
    /**
     * The slot number of this slot.
     */
    slot?: number;
  }>;
};
