import { BlockIdentifier } from "../../shared/literals/block_identifier.js";
import { LootTablePath } from "../../shared/literals/loot_table_path.js";
import { EntityEventTrigger } from "../entity_behavior/event.js";

/**
 * Allows this entity to locate a random target block that it can path find to. Once found, the entity will move towards it and dig up an item (Default target block types: Dirt, Grass, Podzol, DirtWithRoots, MossBlock, Mud, MuddyMangroveRoots).
 */
export type EntityBehaviorRandomSearchAndDigComponent = {
  priority?: number;
  /**
   * Goal cooldown range in seconds.
   */
  cooldown_range?: Array<number>;
  /**
   * Digging duration in seconds.
   */
  digging_duration_range?: Array<number>;
  /**
   * Amount of retries to find a valid target position within search range.
   */
  find_valid_position_retries?: number;
  /**
   * Distance in blocks within the entity to considers it has reached it's target position.
   * @default 1.5
   */
  goal_radius?: number;
  /**
   * File path relative to the behavior pack root for items to spawn list (loot table format).
   */
  item_table?: LootTablePath;
  /**
   * Event to run when the goal ends searching has begins digging.
   */
  on_digging_start?: EntityEventTrigger;
  /**
   * Event to run when the goal failed while in digging state.
   */
  on_fail_during_digging?: EntityEventTrigger;
  /**
   * Event to run when the goal failed while in searching state.
   */
  on_fail_during_searching?: EntityEventTrigger;
  /**
   * Event to run when the goal find a item.
   */
  on_item_found?: EntityEventTrigger;
  /**
   * Event to run when the goal starts searching.
   */
  on_searching_start?: EntityEventTrigger;
  /**
   * Event to run when searching and digging has ended.
   */
  on_success?: EntityEventTrigger;
  /**
   * Width and length of the volume around the entity used to find a valid target position.
   */
  search_range_xz?: number;
  /**
   * Height of the volume around the entity used to find a valid target position.
   */
  search_range_y?: number;
  /**
   * Digging duration before spawning item in seconds.
   */
  spawn_item_after_seconds?: number;
  /**
   * Distance to offset the item's spawn location in the direction the mob is facing.
   */
  spawn_item_pos_offset?: number;
  /**
   * Searching movement speed multiplier.
   * @default 1
   */
  speed_multiplier?: number;
  /**
   * List of target block types the goal will look to dig on. Overrides the default list.
   */
  target_blocks?: Array<BlockIdentifier>;
  /**
   * Dig target position offset from the feet position of the mob in their facing direction.
   * @default 2.25
   */
  target_dig_position_offset?: number;
};
