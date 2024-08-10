/**
 * A property that determines when an item will break from use. The durability of an item is potentially depleted upon use based on the damage chance.
 */
export type ItemDurabilityComponent = {
  /**
   * Max durability is the amount of damage that this item can take before breaking.
   */
  max_durability?: number;
  /**
   * Damage chance is the percentage chance of this item losing durability. Default is set to 100. Defined as an int range with min and max value.
   */
  damage_chance?: {
    min?: number;
    max?: number;
  };
};
