// auto generated
import { SpellEffects } from "../../shared/spell_effects.js";

/**
 * Defines an entity's melee attack and any additional effects on it.
 */
export type EntityAttackComponent = {
  /**
   * Range of the random amount of damage the melee attack deals. A negative value can heal the entity instead of hurting it.
   */
  damage?:
    | number
    | {
        range_min?: number;
        range_max?: number;
      }
    | Array<number>;
  /**
   * Identifier of the status ailment to apply to an entity attacked by this entity's melee attack.
   */
  effect_name?: SpellEffects;
  /**
   * Duration in seconds of the status ailment applied to the damaged entity.
   */
  effect_duration?: number;
};
