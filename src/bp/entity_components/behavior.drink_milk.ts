// auto generated
import { Filters } from "../../shared/filter.js";

/**
 * Allows the mob to drink milk based on specified environment conditions.
 */
export type EntityBehaviorDrinkMilkComponent = {
  priority?: number;
  /**
   * Conditions that need to be met for the behavior to start.
   */
  filters?: Filters;
  /**
   * Time (in seconds) that the goal is on cooldown before it can be used again.
   * @default 5
   */
  cooldown_seconds?: number;
};
