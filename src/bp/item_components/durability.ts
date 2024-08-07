import { Range } from "../../shared/range.js";

/**
 * Determines how much damage the item can take before breaking, and allows the item to be combined in crafting. In format versions prior to 1.20.0, this component requires the 'Holiday Creator Features' experimental toggle.
 */
export type ItemDurabilityComponent = {
  /**
   * Damage chance is the percentage chance of this item losing durability. Default is set at 100. Defined as an int range with min and max value.
   */
  damage_chance?: Range;
  /**
   * Max durability is the amount of damage that this item can take before breaking. This is a required parameter with a minimum value of 0.
   */
  max_durability?: number;
};
