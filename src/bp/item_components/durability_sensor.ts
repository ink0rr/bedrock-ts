// auto generated
import { ParticleIdentifier } from "../../shared/literals/particle_identifier.js";
import { SoundDefinitionIdentifier } from "../../shared/literals/sound_definition_identifier.js";

/**
 * Allows an item to emit effects when it receives damage. Requires the `minecraft:durability` component.
 */
export type ItemDurabilitySensorComponent = {
  /**
   * List of durability thresholds and effects emitted when each threshold is met.
   */
  durability_thresholds?: Array<{
    /**
     * Effects are emitted when the durability is less than or equal to this value.
     */
    durability?: any;
    /**
     * Particle effect to emit when the threshold is met.
     */
    particle_type?: ParticleIdentifier;
    /**
     * Sound effect to emit when the threshold is met.
     */
    sound_event?: SoundDefinitionIdentifier;
  }>;
};
