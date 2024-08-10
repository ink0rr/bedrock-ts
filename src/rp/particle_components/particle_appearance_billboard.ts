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
  direction?: {
    mode?: "derive_from_velocity" | "custom_direction";
    /**
     * only used in 'derive_from_velocity' mode. The direction is set if the speed of the particle is above the threshold. The default is 0.01
     */
    min_speed_threshold?: number;
    custom_direction?: Array<MoLang>;
  };
  /**
   * Specifies the UVs for the particle
   */
  uv?: {
    texture_height?: number;
    texture_width?: number;
    /**
     * Assuming the specified texture width and height, use theseAssuming the specified texture width and height, use these uv coordinates.   uv coordinates.
     */
    uv?: Array<MoLang>;
    uv_size?: Array<MoLang>;
    /**
     * A flipbook animation uses pieces of the texture to animate, by stepping over time from one 'frame' to another
     */
    flipbook?: {
      base_UV?: Array<MoLang>;
      size_UV?: Array<number>;
      step_UV?: Array<number>;
      frames_per_second?: number;
      max_frame?: MoLang;
      /**
       * Optional, adjust fps to match lifetime of particle. default=false
       */
      stretch_to_lifetime?: boolean;
      /**
       * Optional, makes the animation loop when it reaches the end
       */
      loop?: boolean;
    };
  };
};
