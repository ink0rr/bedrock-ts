// auto generated
import { ItemDescriptor } from "../../shared/item_descriptor.js";

/**
 * Defines the way an entity can get into the 'bribed' state.
 */
export type EntityBribeableComponent = {
  /**
   * Time in seconds before the Entity can be bribed again.
   * @default 2
   */
  bribe_cooldown?: number;
  /**
   * The list of items that can be used to bribe the entity.
   */
  bribe_items?: Array<ItemDescriptor>;
};
