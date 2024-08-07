import { EventTriggerFiltered } from "../../shared/event_trigger.js";
import { ItemIdentifier } from "../../shared/literals/item_identifier.js";
import { ItemTag } from "../../shared/literals/item_tag.js";

/**
 * Defines sets of items that can be used to trigger events when used on this entity. The item will also be taken and placed in the entity's inventory.
 */
export type EntityGiveableComponent = {
  triggers?:
    | Array<{
        /**
         * An optional cool down in seconds to prevent spamming interactions.
         */
        cooldown?: number;
        /**
         * The list of items that can be given to the entity to place in their inventory.
         */
        items?: Array<
          | ItemIdentifier
          | {
              any_tag?: Array<ItemTag>;
            }
        >;
        /**
         * Event to fire when the correct item is given.
         */
        on_give?: EventTriggerFiltered;
      }>
    | {
        /**
         * An optional cool down in seconds to prevent spamming interactions.
         */
        cooldown?: number;
        /**
         * The list of items that can be given to the entity to place in their inventory.
         */
        items?: Array<
          | ItemIdentifier
          | {
              any_tag?: Array<ItemTag>;
            }
        >;
        /**
         * Event to fire when the correct item is given.
         */
        on_give?: EventTriggerFiltered;
      };
};
