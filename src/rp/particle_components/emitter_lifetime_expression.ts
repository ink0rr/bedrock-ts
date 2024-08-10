// auto generated
import { MoLang } from "../../shared/molang.js";

export type ParticleEmitterLifetimeExpressionComponent = {
  /**
   * When the expression is non-zero, the emitter will emit particles. Evaluated every frame
   */
  activation_expression?: MoLang;
  /**
   * Emitter will expire if the expression is non-zero. Evaluated every frame
   */
  expiration_expression?: MoLang;
};
