import { SpellEffects } from "../../shared/spell_effects.js";

export type SpellEffectDefinition = {
  effect?: SpellEffects;
  /**
   * The time duration in seconds of the effect
   */
  duration?: number;
  /**
   * The amplifier for the effect
   */
  amplifier?: number;
  /**
   * Whether to show effect particles
   */
  visible?: boolean;
  /**
   * Whether to show an on screen effect icon animation upon applying the effect
   */
  display_on_screen_animation?: boolean;
};
