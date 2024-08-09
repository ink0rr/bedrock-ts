import { EventTrigger } from "../../shared/event_trigger.js";
import { LootTablePath } from "../../shared/literals/loot_table_path.js";
import { EntityBehaviorType } from "../entity_behavior/type.js";

/**
 * Allows the mob to move near a target and drop an item.
 */
export type EntityBehaviorDropItemForComponent = {
  priority?: number;
  /**
   * Total time that the goal is on cooldown before it can be used again.
   * @default 0.2
   */
  cooldown?: number;
  /**
   * The percent chance the entity will drop an item when using this goal.
   * @default 1
   */
  drop_item_chance?: number;
  /**
   * The list of conditions another entity must meet to be a valid target to drop an item for.
   */
  entity_types?: EntityBehaviorType;
  /**
   * Distance in blocks within the entity considers it has reached it's target position.
   * @default 0.5
   */
  goal_radius?: number;
  /**
   * The loot table that contains the possible loot the entity can drop with this goal.
   */
  loot_table?: LootTablePath;
  /**
   * Maximum distance in blocks this mob will look for entities to drop an item for.
   */
  max_dist?: number;
  /**
   * The maximum height the entities head will look at when dropping the item. The entity will always be looking at its target.
   * @default 10
   */
  max_head_look_at_height?: number;
  /**
   * If the target position is farther away than this distance on any tick, the entity will teleport to the target position.
   * @default 2
   */
  minimum_teleport_distance?: number;
  /**
   * The preferred distance the entity tries to be from the target it is dropping an item for.
   * @default 1
   */
  offering_distance?: number;
  /**
   * The event to trigger when the entity attempts to drop an item.
   */
  on_drop_attempt?: EventTrigger;
  /**
   * The number of blocks each tick that the entity will check within its search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick.
   */
  search_count?: number;
  /**
   * The Height in blocks the entity will search within to find a valid target position.
   * @default 1
   */
  search_height?: number;
  /**
   * The distance in blocks the entity will search within to find a valid target position.
   */
  search_range?: number;
  /**
   * The numbers of seconds that will pass before the dropped entity can be picked up from the ground.
   */
  seconds_before_pickup?: number;
  /**
   * Movement speed multiplier of the entity when using this Goal.
   * @default 1
   */
  speed_multiplier?: number;
  /**
   * The valid times of day that this goal can be used. For reference: noon is 0.0, sunset is 0.25, midnight is 0.5, and sunrise is 0.75, and back to noon for 1.0.
   */
  time_of_day_range?: [number, number];
  /**
   * The range in blocks within which the entity searches to find a target to drop an item for.
   */
  target_range?: Array<number>;
  /**
   * When the entity teleports, offset the teleport position by this many blocks in the X, Y, and Z coordinate.
   */
  teleport_offset?: [number, number, number];
};
