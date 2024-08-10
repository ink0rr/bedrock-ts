// auto generated
import { MoLang } from "../../shared/molang.js";

export type ParticleParticleAppearanceBillboardComponent = {
  /**
   * Specifies the x/y size of the billboard evaluated every frame
   */
  size?: Array<MoLang>;
  /**
   * Used to orient the billboard
   */
  facing_camera_mode?:
    | "rotate_xyz"
    | "rotate_y"
    | "lookat_xyz"
    | "lookat_y"
    | "direction_x"
    | "direction_y"
    | "direction_z"
    | "emitter_transform_xy"
    | "emitter_transform_xz"
    | "emitter_transform_yz"
    | "lookat_direction";
  /**
   * Specifies how to calculate the direction of a particle, this will be used by facing modes that require a direction as input (for instance: lookat_direction and direction)
   */
  direction?: Record<string, never>;
  /**
   * Specifies the UVs for the particle
   */
  uv?: Record<string, never>;
};
