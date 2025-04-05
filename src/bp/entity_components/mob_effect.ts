// auto generated
import { Filters } from "../../shared/filter.js";
import { SpellEffects } from "../../shared/spell_effects.js";

/**
 * A component that applies a mob effect to entities that get within range.
 */
export type EntityMobEffectComponent = {
  /**
   * How close a hostile entity must be to have the mob effect applied.
   * @default 0.2
   */
  effect_range?: number;
  /**
   * The mob effect that is applied to entities that enter this entities effect range.
   */
  mob_effect?: SpellEffects;
  /**
   * How long the applied mob effect lasts in seconds.
   * @default 10
   */
  effect_time?: number;
  /**
   * The set of entities that are valid to apply the mob effect to.
   */
  entity_filter?: Filters;
  /**
   * Time in seconds to wait between each application of the effect.
   */
  cooldown_time?: number;
};
