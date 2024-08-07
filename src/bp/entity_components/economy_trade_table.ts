import { TradeTablePath } from "../../shared/literals/trade_table_path.js";

/**
 * Defines this entity's ability to trade with players.
 */
export type EntityEconomyTradeTableComponent = {
  /**
   * Name to be displayed while trading with this entity.
   */
  display_name?: string;
  /**
   * File path relative to the behavior pack root for this entity's trades.
   */
  table?: TradeTablePath;
  /**
   * Used to determine if trading with entity opens the new trade screen.
   */
  new_screen?: boolean;
  /**
   * Used in legacy prices to determine how much should Demand be modified by when the player has the Hero of the Village mob effect.
   * @default -4
   */
  hero_demand_discount?: number;
  /**
   * Determines if the trades should persist when the mob transforms. This makes it so that the next time the mob is transformed to something with a trade_table or economy_trade_table, then it keeps their trades.
   */
  persist_trades?: boolean;
  /**
   * Determines when the mob transforms, if the trades should be converted when the new mob has a economy_trade_table. When the trades are converted, the mob will generate a new trade list with their new trade table, but then it will try to convert any of the same trades over to have the same enchantments and user data. For example, if the original has a Emerald to Enchanted Iron Sword (Sharpness 1), and the new trade also has an Emerald for Enchanted Iron Sword, then the enchantment will be Sharpness 1.
   */
  convert_trades_economy?: boolean;
  /**
   * How much should the discount be modified by when the player has cured the Zombie Villager. Can be specified as a pair of numbers (low-tier trade discount and high-tier trade discount).
   */
  cured_discount?: [number, number];
  /**
   * The max the discount can be modified by when the player has cured the Zombie Villager. Can be specified as a pair of numbers (low-tier trade discount and high-tier trade discount).
   */
  max_cured_discount?: [number, number];
  /**
   * How much should the discount be modified by when the player has cured a nearby Zombie Villager.
   * @default -25
   */
  nearby_cured_discount?: number;
  /**
   * The max the discount can be modified by when the player has cured a nearby Zombie Villager.
   * @default -200
   */
  max_nearby_cured_discount?: number;
  /**
   * Show an in game trade screen when interacting with the mob.
   * @default true
   */
  show_trade_screen?: boolean;
  /**
   * Determines whether the legacy formula is used to determines the trade prices.
   */
  use_legacy_price_formula?: boolean;
};
