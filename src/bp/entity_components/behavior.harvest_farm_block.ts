/**
 * Allows the entity to search within an area for farmland with air above it. If found, the entity will replace the air block by planting a seed item from its inventory on the farmland block. This goal requires 'minecraft:inventory' and 'minecraft:navigation' to execute. This goal will not execute if the entity does not have an item in its inventory.
 */
export type EntityBehaviorHarvestFarmBlockComponent = {
  priority?: number;
  /**
   * Movement speed multiplier of the entity when using this Goal.
   * @default 0.5
   */
  speed_multiplier?: number;
  /**
   * The maximum amount of time in seconds that the goal can take before searching for the first harvest block. The time is chosen between 0 and this number.
   * @default 1
   */
  max_seconds_before_search?: number;
  /**
   * The maximum amount of time in seconds that the goal can take before searching again, after failing to find a a harvest block already. The time is chosen between 0 and this number.
   * @default 8
   */
  search_cooldown_max_seconds?: number;
  /**
   * The amount of time in seconds that the goal will cooldown after a successful reap/sow, before it can start again.
   * @default 0.5
   */
  seconds_until_new_task?: number;
  /**
   * Distance in blocks within the entity considers it has reached it's target position.
   * @default 1.5
   */
  goal_radius?: number;
  /**
   * The number of randomly selected blocks each tick that the entity will check within its search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick.
   */
  search_count?: number;
  /**
   * The Height in blocks the entity will search within to find a valid target position.
   * @default 1
   */
  search_height?: number;
  /**
   * The distance in blocks the entity will search within to find a valid target position.
   * @default 16
   */
  search_range?: number;
};
