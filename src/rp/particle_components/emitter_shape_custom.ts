// auto generated
import { MoLang } from "../../shared/molang.js";

export type ParticleEmitterShapeCustomComponent = {
  /**
   * Specifies the offset from the emitter to emit the particles. Evaluated once per particle emitted
   */
  offset?: Array<MoLang>;
  /**
   * Specifies the direciton for the particle. Evaluated once per particle emitted
   */
  direction?: "outwards" | "inwards" | Array<MoLang>;
};
