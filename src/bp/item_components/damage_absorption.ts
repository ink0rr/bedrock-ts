import { DamageSource } from "../../shared/damage_source.js";

/**
 * Allows an item to absorb damage that would otherwise be dealt to its wearer. The absorbed damage reduces the item's durability, with any excess damage being ignored. Requires the `minecraft:durability` component.
 */
export type ItemDamageAbsorptionComponent = {
  /**
   * List of damage causes that can be absorbed by the item. By default, no damage cause is absorbed.
   */
  absorbable_causes?: Array<DamageSource>;
};
