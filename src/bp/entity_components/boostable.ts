// auto generated
import { ItemIdentifier } from "../../shared/literals/item_identifier.js";

/**
 * Defines the conditions and behavior of a rideable entity's boost.
 */
export type EntityBoostableComponent = {
  /**
   * Factor by which the entity's normal speed increases. E.g. 2.0 means go twice as fast.
   * @default 1
   */
  speed_multiplier?: number;
  /**
   * Time in seconds for the boost.
   * @default 3
   */
  duration?: number;
  /**
   * List of items that can be used to boost while riding this entity.
   */
  boost_items?: Array<{
    /**
     * Name of the item that can be used to boost.
     */
    item?: ItemIdentifier;
    /**
     * This is the damage that the item will take each time it is used.
     * @default 1
     */
    damage?: number;
    /**
     * The item used to boost will become this item once it is used up.
     */
    replace_item?: ItemIdentifier;
  }>;
};
