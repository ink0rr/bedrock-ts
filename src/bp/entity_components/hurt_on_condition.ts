// auto generated
import { DamageSource } from "../../shared/damage_source.js";
import { Filters } from "../../shared/filter.js";

/**
 * Defines a set of conditions under which an entity should take damage.
 */
export type EntityHurtOnConditionComponent = {
  damage_conditions?: Array<{
    filters?: Filters;
    cause?: DamageSource;
    /**
     * The amount of damage done each tick that the conditions are met.
     */
    damage_per_tick?: number;
  }>;
};
