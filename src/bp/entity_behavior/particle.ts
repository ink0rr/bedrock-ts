import { ParticleIdentifier } from "../../shared/literals/particle_identifier.js";

export type EntityBehaviorParticleDefinition = {
  /**
   * Particle Type
   */
  particle_type?: ParticleIdentifier;
  /**
   * Particle Y Offset
   */
  particle_y_offset?: number;
  /**
   * Particle Offset Towards Indicator
   */
  particle_offset_towards_indicator?: boolean;
};
