// auto generated
import { MoLang } from "../../shared/molang.js";

export type ParticleParticleLifetimeExpressionComponent = {
  /**
   * This expression makes the particle expire when true (non-zero). The float/expr is evaluated once per particle. Evaluated every frame
   */
  expiration_expression?: MoLang;
  /**
   * Alternate way to express lifetime particle will expire after this much time. Evaluated once
   */
  max_lifetime?: MoLang;
};
