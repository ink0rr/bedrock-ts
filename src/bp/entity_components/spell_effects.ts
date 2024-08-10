// auto generated
import { SpellEffects } from "../../shared/spell_effects.js";
import { SpellEffectDefinition } from "../entity_behavior/spell_effect.js";

/**
 * Defines what mob effects to add and remove to the entity when adding this component.
 */
export type EntitySpellEffectsComponent = {
  /**
   * List of effects to add to this entity after adding this component.
   */
  add_effects?: Array<SpellEffectDefinition> | SpellEffectDefinition;
  /**
   * List of identifiers of effects to be removed from this entity after adding this component.
   */
  remove_effects?: Array<SpellEffects> | SpellEffects;
};
