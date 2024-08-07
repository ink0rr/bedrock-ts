import { EntityIdentifier } from "../../shared/entity_identifier.js";
import { MoLang } from "../../shared/molang.js";

export type EntityReflectProjectilesComponent = {
  /**
   * List of projectiles to deflect.
   */
  reflected_projectiles?: Array<EntityIdentifier>;
  azimuth_angle?: MoLang;
  reflection_scale?: MoLang;
};
