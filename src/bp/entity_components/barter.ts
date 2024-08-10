// auto generated
import { LootTablePath } from "../../shared/literals/loot_table_path.js";

/**
 * Enables the component to drop an item as a barter exchange.
 */
export type EntityBarterComponent = {
  /**
   * Loot table that's used to drop a random item.
   */
  barter_table?: LootTablePath;
  /**
   * Duration, in seconds, for which mob won't barter items if it was hurt.
   */
  cooldown_after_being_attacked?: number;
};
