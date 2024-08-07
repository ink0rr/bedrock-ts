import { ItemIdentifier } from "../shared/item_identifier.js";
import { Range } from "../shared/range.js";

export type LootTable = {
  /**
   * Lists the loot pools for this loot table.
   */
  pools: LootTablePool[];
};

export type LootTablePool = {
  /**
   * Determines how many items will be selected.
   */
  rolls?: number;
  /**
   * Lists the entries of the loot table to be chosen from.
   */
  entries?: LootTableEntry[];
};

export type LootTableEntry =
  | {
      type: "empty";
      weight?: number;
    }
  | {
      type: "item";
      name: ItemIdentifier;
      weight?: number;
      functions?: LootTableFunction[];
    }
  | {
      type: "loot_table";
      name: string;
      weight?: number;
    };

export type LootTableFunction =
  | {
      function: "set_count";
      count: number | Range;
    }
  | {
      function: "set_damage";
      damage: number | Range;
    }
  | {
      function: "set_data";
      data: number | Range;
    }
  | {
      function: "set_lore";
      lore: string[];
    }
  | {
      function: "set_name";
      name: string;
    };
