// auto generated
import { ItemIdentifier } from "../../shared/literals/item_identifier.js";

/**
 * When an item has a food component, it becomes edible to the player
 */
export type ItemFoodComponent = {
  /**
   * How much nutrition does this food item give the player when eaten.
   */
  nutrition?: number;
  /**
   * If true you can always eat this item (even when not hungry), defaults to false.
   */
  can_always_eat?: boolean;
  /**
   * Saturation Modifier is used in this formula: (nutrition * saturation_modifier * 2) when applying the saturation buff.
   */
  saturation_modifier?: number;
  /**
   * When used, convert the *this* item to the one specified by 'using_converts_to'.
   */
  using_converts_to?: ItemIdentifier;
};
