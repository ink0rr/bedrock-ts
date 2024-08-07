import { LootTable } from "../../shared/loot_table.js";
import { Slot } from "../../shared/slot.js";

/**
 * Sets the Equipment table to use for this Entity.
 */
export type EntityEquipmentComponent = {
  /**
   * The file path to the equipment table, relative to the behavior pack's root.
   */
  table?: LootTable;
  /**
   * A list of slots with the chance to drop an equipped item from that slot.
   */
  slot_drop_chance?: Array<{
    slot?: Slot;
    drop_chance?: number;
  }>;
};
