// auto generated
import { DamageSource } from "../../shared/damage_source.js";
import { Filters } from "../../shared/filter.js";

/**
 * Allows this entity to pretend to be dead to avoid being targeted by attackers.
 */
export type EntityBehaviorPlayDeadComponent = {
  priority?: number;
  /**
   * The amount of time the mob will remain playing dead (in seconds).
   * @default 1
   */
  duration?: number;
  /**
   * The amount of health at which damage will cause the mob to play dead.
   */
  force_below_health?: number;
  /**
   * The likelihood of this goal starting upon taking damage.
   * @default 1
   */
  random_start_chance?: number;
  /**
   * The range of damage that may cause the goal to start depending on randomness. Damage taken below the min will never cause the goal to start. Damage taken above the max will always cause the goal to start.
   */
  random_damage_range?: Array<number>;
  /**
   * The list of Entity Damage Sources that will cause this mob to play dead.
   */
  damage_sources?: Array<DamageSource>;
  /**
   * Whether the mob will receive the regeneration effect while playing dead.
   * @default true
   */
  apply_regeneration?: boolean;
  /**
   * The list of other triggers that are required for the mob to activate play dead.
   */
  filters?: Filters;
};
