import { ActionText } from "../../shared/action_text.js";
import { EventTriggerFiltered } from "../../shared/event_trigger.js";
import { ItemIdentifier } from "../../shared/item_identifier.js";
import { ItemTag } from "../../shared/item_tag.js";

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
    accepted_items?: Array<
      | ItemIdentifier
      | {
          any_tag?: Array<ItemTag>;
        }
    >;
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
    on_equip?: EventTriggerFiltered;
    /**
     * Event to trigger when this item is removed from this entity.
     */
    on_unequip?: EventTriggerFiltered;
    /**
     * The slot number of this slot.
     */
    slot?: number;
  }>;
};
