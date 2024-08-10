// auto generated
import { MoLang } from "../../shared/molang.js";

export type ParticleEmitterShapeDiscComponent = {
  /**
   * Disc radius. Evaluated once per particle emitted
   */
  radius?: MoLang;
  /**
   * Specifies the normal of the disc plane, the disc will be perpendicular to this direction
   */
  plane_normal?: Array<string | number | "x" | "y" | "z">;
  /**
   * Emit only from the edge of the disc
   */
  surface_only?: boolean;
  /**
   * Specifies the offset from the emitter to emit the particles. Evaluated once per particle emitted
   */
  offset?: Array<MoLang>;
  direction?: "outwards" | "inwards" | Array<MoLang>;
};
