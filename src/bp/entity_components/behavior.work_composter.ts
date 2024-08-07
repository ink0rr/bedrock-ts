import { EventTriggerFiltered } from "../../shared/event_trigger.js";

/**
 * Allows the NPC to use the composter POI to convert excess seeds into bone meal.
 */
export type EntityBehaviorWorkComposterComponent = {
  priority?: number;
  /**
   * The amount of ticks the NPC will stay in their the work location.
   */
  active_time?: number;
  /**
   * The maximum number of times the mob will interact with the composter.
   * @default 1
   */
  block_interaction_max?: number;
  /**
   * Determines whether the mob can empty a full composter.
   * @default true
   */
  can_empty_composter?: boolean;
  /**
   * Determines whether the mob can add items to a composter given that it is not full.
   * @default true
   */
  can_fill_composter?: boolean;
  /**
   * If true, this entity can work when their jobsite POI is being rained on.
   */
  can_work_in_rain?: boolean;
  /**
   * The amount of ticks the goal will be on cooldown before it can be used again.
   */
  goal_cooldown?: number;
  /**
   * The maximum number of items which can be added to the composter per block interaction.
   * @default 20
   */
  items_per_use_max?: number;
  /**
   * Limits the amount of each compostable item the mob can use. Any amount held over this number will be composted if possible.
   * @default 10
   */
  min_item_count?: number;
  /**
   * Event to run when the mob reaches their jobsite.
   */
  on_arrival?: EventTriggerFiltered;
  /**
   * Movement speed multiplier of the mob when using this AI Goal.
   * @default 0.5
   */
  speed_multiplier?: number;
  /**
   * The maximum interval in which the mob will interact with the composter.
   * @default 200
   */
  use_block_max?: number;
  /**
   * The minimum interval in which the mob will interact with the composter.
   * @default 100
   */
  use_block_min?: number;
  /**
   * If 'can_work_in_rain' is false, this is the maximum number of ticks left in the goal where rain will not interrupt the goal.
   * @default -1
   */
  work_in_rain_tolerance?: number;
};
