// auto generated
import { TerrainTextureIdentifier } from "../../shared/literals/terrain_texture_identifier.js";

/**
 * The material instances for a block. Maps face or material_instance names in a geometry file to an actual material instance. You can assign a material instance object to any of these faces: 'up', 'down', 'north', 'south', 'east', 'west', or '*'. You can also give an instance the name of your choosing such as 'my_instance', and then assign it to a face by doing 'north':'my_instance'.
 */
export type BlockMaterialInstancesComponent = {
  /**
   * Name of a texture from the terrain_texture.json file.
   */
  texture?: TerrainTextureIdentifier;
  /**
   * The render method to use.
   * @default opaque
   */
  render_method?: "opaque" | "blend" | "alpha_test" | "double_sided";
  /**
   * Should this material have ambient occlusion applied when lighting? If true, shadows will be created around and underneath the block.
   * @default true
   */
  ambient_occlusion?: boolean;
  /**
   * Should this material have ambient occlusion applied when lighting.
   * @default true
   */
  face_dimming?: boolean;
};
