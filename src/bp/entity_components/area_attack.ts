// auto generated
import { DamageSource } from "../../shared/damage_source.js";
import { Filter } from "../../shared/filter.js";

/**
 * A component that does damage to entities that get within range.
 */
export type EntityAreaAttackComponent = {
  /**
   * How close a hostile entity must be to have the damage applied.
   * @default 0.2
   */
  damage_range?: number;
  /**
   * How much damage per tick is applied to entities that enter the damage range.
   * @default 2
   */
  damage_per_tick?: number;
  /**
   * The type of damage that is applied to entities that enter the damage range.
   */
  cause?: DamageSource;
  /**
   * The set of entities that are valid to apply the damage to when within range.
   */
  entity_filter?: Filter;
  /**
   * Attack cooldown (in seconds) for how often this entity can attack a target.
   */
  damage_cooldown?: number;
  /**
   * If the entity should play their attack sound when attacking a target.
   * @default true
   */
  play_attack_sound?: boolean;
};
