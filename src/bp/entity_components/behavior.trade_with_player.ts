import { Filter } from "../../shared/filter.js";

/**
 * Allows the player to trade with this mob. When the goal starts, it will stop the mob's navigation.
 */
export type EntityBehaviorTradeWithPlayerComponent = {
  priority?: number;
  /**
   * The max distance that the mob can be from the player before exiting the goal.
   * @default 8
   */
  max_distance_from_player?: number;
  /**
   * Conditions that need to be met for the behavior to start.
   */
  filters?: Filter;
};
