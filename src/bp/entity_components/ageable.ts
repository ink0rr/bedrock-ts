// auto generated
import { Filters } from "../../shared/filter.js";
import { ItemDescriptor } from "../../shared/item_descriptor.js";
import { ItemIdentifier } from "../../shared/literals/item_identifier.js";
import { EntityEventTrigger } from "../entity_behavior/event.js";

/**
 * Adds a timer for the entity to grow up. It can be accelerated by giving the entity the items it likes as defined by feedItems.
 */
export type EntityAgeableComponent = {
  /**
   * Amount of time before the entity grows up, -1 for always a baby.
   * @default 1200
   */
  duration?: number;
  /**
   * List of items that can be fed to the entity. Includes 'item' for the item name and 'growth' to define how much time it grows up by.
   */
  feed_items?:
    | Array<
        | {
            item?: ItemDescriptor;
            result_item?: ItemIdentifier;
            growth?: number;
          }
        | ItemIdentifier
      >
    | ItemIdentifier;
  /**
   * List of items that the entity drops when it grows up.
   */
  drop_items?: Array<ItemIdentifier>;
  /**
   * Event to run when this entity grows up.
   */
  grow_up?: EntityEventTrigger;
  /**
   * List of conditions to meet so that the entity can be fed.
   */
  interact_filters?: Filters;
};
