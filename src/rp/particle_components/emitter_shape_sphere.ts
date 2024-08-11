// auto generated
import { MoLang } from "../../shared/molang.js";

export type ParticleEmitterShapeSphereComponent = {
  /**
   * Sphere radius. Evaluated once per particle emitted
   */
  radius?: MoLang;
  /**
   * Emit only from the surface of the sphere
   */
  surface_only?: boolean;
  /**
   * Specifies the offset from the emitter to emit the particles. Evaluated once per particle emitted
   */
  offset?: Array<MoLang>;
  /**
   * Specifies the direction of particles.  Defaults to 'outwards'
   */
  direction?: "outwards" | "inwards" | Array<MoLang>;
};
