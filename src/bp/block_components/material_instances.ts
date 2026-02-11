// auto generated
import { TerrainTextureIdentifier } from "../../shared/literals/terrain_texture_identifier.js";

export namespace BlockMaterialInstancesComponent {
  export type MaterialInstance = {
    /**
     * Name of a texture from the terrain_texture.json file.
     */
    texture?: TerrainTextureIdentifier;
    /**
     * The render method to use.
     * @default "opaque"
     */
    render_method?:
      | "opaque"
      | "blend"
      | "alpha_test"
      | "double_sided"
      | "alpha_test_single_sided"
      | "blend_to_opaque"
      | "alpha_test_to_opaque"
      | "alpha_test_single_sided_to_opaque";
    /**
     * Should this material have ambient occlusion applied when lighting? If true, shadows will be created around and underneath the block. Optionally can be constructed with float to control exponent applied to ao value after lighting.
     * @default true
     */
    ambient_occlusion?: boolean | number;
    /**
     * Should this material have ambient occlusion applied when lighting.
     * @default true
     */
    face_dimming?: boolean;
    /**
     * Tint multiplied to the color. Tint method logic varies, but often refers to the rain and temperature of the biome the block is placed in to compute the tint.
     */
    tint_method?: string;
    /**
     * Controls rotating the face UVs randomly based on block position.
     */
    isotropic?: boolean;
    alpha_masked_tint?: boolean;
  };
}
/**
 * The material instances for a block. Maps face or material_instance names in a geometry file to an actual material instance. You can assign a material instance object to any of these faces: 'up', 'down', 'north', 'south', 'east', 'west', or '*'. You can also give an instance the name of your choosing such as 'my_instance', and then assign it to a face by doing 'north':'my_instance'.
 */
export type BlockMaterialInstancesComponent = {
  "*"?: Record<string, never>;
  up?: Record<string, never>;
  down?: Record<string, never>;
  north?: Record<string, never>;
  south?: Record<string, never>;
  east?: Record<string, never>;
  west?: Record<string, never>;
} & string &
  Record<string, never>;
