// auto generated
import { ItemDescriptor } from "../../shared/item_descriptor.js";
import { EntityEventTrigger } from "../entity_behavior/event.js";

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
        items?: Array<ItemDescriptor>;
        /**
         * Event to fire when the correct item is given.
         */
        on_give?: EntityEventTrigger;
      }>
    | {
        /**
         * An optional cool down in seconds to prevent spamming interactions.
         */
        cooldown?: number;
        /**
         * The list of items that can be given to the entity to place in their inventory.
         */
        items?: Array<ItemDescriptor>;
        /**
         * Event to fire when the correct item is given.
         */
        on_give?: EntityEventTrigger;
      };
};
