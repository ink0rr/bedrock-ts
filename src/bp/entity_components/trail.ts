import { BlockIdentifier } from "../../shared/literals/block_identifier.js";
import { Filter } from "../../shared/filter.js";

/**
 * Causes an entity to leave a trail of blocks as it moves about the world.
 */
export type EntityTrailComponent = {
  /**
   * The type of block you wish to be spawned by the entity as it move about the world. Solid blocks may not be spawned at an offset of (0,0,0).
   * @default air
   */
  block_type?: BlockIdentifier;
  /**
   * One or more conditions that must be met in order to cause the chosen block type to spawn.
   */
  spawn_filter?: Filter;
  /**
   * The distance from the entities current position to spawn the block. Capped at up to 16 blocks away. The X value is left/right(-/+), the Z value is backward/forward(-/+), the Y value is below/above(-/+).
   */
  spawn_offset?: Array<number>;
};
