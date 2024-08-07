import { LootTable } from "../../shared/loot_table.js";

/**
 * Sets the loot table for what items this entity drops upon death.
 */
export type EntityLootComponent = {
  /**
   * The path to the loot table, relative to the Behavior Pack's root.
   */
  table?: LootTable;
};
