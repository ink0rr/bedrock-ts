// auto generated
import { TerrainTextureIdentifier } from "../../shared/literals/terrain_texture_identifier.js";

/**
 * Sets the particles that will be used when block is destroyed. This component can be omitted.
 */
export type BlockDestructionParticlesComponent = {
  /**
   * The texture name used for the particle.
   */
  texture?: TerrainTextureIdentifier;
  /**
   * Optional, tint multiplied to the color. Tint method logic varies, but often refers to the rain and temperature of the biome the block is placed in to compute the tint.
   */
  tint_method?: string;
};
