// auto generated
import { MoLang } from "../../shared/molang.js";

export type ParticleEmitterRateSteadyComponent = {
  /**
   * How often a particle is emitted, in particles/sec. Evaluated once per particle emitted
   */
  spawn_rate?: MoLang;
  /**
   * Maximum number of particles that can be active at once for this emitter. Evaluated once per particle emitter loop
   */
  max_particles?: MoLang;
};
