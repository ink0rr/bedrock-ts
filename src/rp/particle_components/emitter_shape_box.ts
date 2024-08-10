// auto generated
import { MoLang } from "../../shared/molang.js";

export type ParticleEmitterShapeBoxComponent = {
  /**
   * Box dimensions. these are the half dimensions, the box is formed centered on the emitter with the box extending in the 3 principal x/y/z axes by these values
   */
  half_dimensions?: Array<MoLang>;
  /**
   * Emit only from the surface of the sphere
   */
  surface_only?: boolean;
  /**
   * Specifies the offset from the emitter to emit the particles. Evaluated once per particle emitted
   */
  offset?: Array<MoLang>;
  direction?: "outwards" | "inwards" | Array<MoLang>;
};
