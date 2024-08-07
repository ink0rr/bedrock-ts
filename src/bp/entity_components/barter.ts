import { LootTable } from "../../shared/loot_table.js";

/**
 * Enables the component to drop an item as a barter exchange.
 */
export type EntityBarterComponent = {
  /**
   * Loot table that's used to drop a random item.
   */
  barter_table?: LootTable;
  /**
   * Duration, in seconds, for which mob won't barter items if it was hurt.
   */
  cooldown_after_being_attacked?: number;
};
