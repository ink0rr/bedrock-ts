import { ItemIdentifier } from "../../shared/item_identifier.js";

/**
 * When an item has a food component, it becomes edible to the player. Must have the minecraft:use_modifiers component in order to function properly.
 */
export type ItemFoodComponent = {
  /**
   * If true you can always eat this item (even when not hungry).
   */
  can_always_eat?: boolean;
  /**
   * The value that is added to the actor's nutrition when the item is used.
   */
  nutrition?: number;
  /**
   * Saturation Modifier is used in this formula: (nutrition * saturation_modifier * 2) when applying the saturation buff.
   */
  saturation_modifier?: number;
  /**
   * When used, converts to the item specified by the string in this field.
   */
  using_converts_to?: ItemIdentifier;
};
