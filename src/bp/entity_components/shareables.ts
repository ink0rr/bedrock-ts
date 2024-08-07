import { ItemIdentifier } from "../../shared/item_identifier.js";

/**
 * Defines a list of items the mob wants to share or pick up.
 */
export type EntityShareablesComponent = {
  /**
   * A bucket for all other items in the game. Note this category is always least priority items.
   */
  all_items?: boolean;
  /**
   * Maximum number of this item the mob will hold.
   * @default -1
   */
  all_items_max_amount?: number;
  /**
   * Number of this item considered extra that the entity wants to share.
   * @default -1
   */
  all_items_surplus_amount?: number;
  /**
   * Number of this item this entity wants to share.
   * @default -1
   */
  all_items_want_amount?: number;
  /**
   * List of items that the entity wants to share.
   */
  items?: Array<{
    /**
     * Prioritizes which items the entity prefers. 0 is the highest priority.
     */
    priority?: number;
    /**
     * The name of the item. Aux value can be specified, for instance 'minecraft:skull:1'.
     */
    item?: ItemIdentifier;
    item_aux?: number;
    /**
     * Defines the item this entity wants to craft with the item defined above. Should be an item name.
     */
    craft_into?: ItemIdentifier;
    /**
     * Maximum number of this item the mob will hold.
     */
    max_amount?: number;
    /**
     * Number of this item this entity wants to have.
     */
    want_amount?: number;
    /**
     * Number of this item considered extra that the entity wants to share.
     */
    surplus_amount?: number;
    /**
     * Maximum number of this item the mob will pick up during a single goal tick.
     */
    pickup_limit?: number;
    /**
     * Mob will admire the item after picking up by looking at it. For this to happen the mob needs to have an Admire component and an Admire goal.
     */
    admire?: boolean;
    /**
     * Mob will barter for the item after picking it up. For this to work the mob needs to have a Barter component and a Barter goal.
     */
    barter?: boolean;
    /**
     * Determines whether the mob will consume the item or not.
     */
    consume_item?: boolean;
    /**
     * Determines whether the mob will try to put the item in its inventory if it has the inventory component and if it can't be equipped.
     */
    stored_in_inventory?: boolean;
    /**
     * Determines whether the mob can only pickup the item and not drop it.
     */
    pickup_only?: boolean;
  }>;
};
