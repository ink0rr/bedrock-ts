// auto generated
import { BlockIdentifier } from "../../shared/literals/block_identifier.js";

/**
 * Allows an entity to jump to another random block.
 */
export type EntityBehaviorJumpToBlockComponent = {
  priority?: number;
  /**
   * The width (in blocks, in range [2, 15]) of the search box, centered around the mob.
   * @default 8
   */
  search_width?: number;
  /**
   * The height (in blocks, in range [2, 15]) of the search box, centered around the mob.
   * @default 10
   */
  search_height?: number;
  /**
   * The minimum length (in blocks) of the mobs path to a block, in order to consider jumping to it.
   * @default 5
   */
  minimum_path_length?: number;
  /**
   * The scale factor of the bounding box of the mob while it is jumping.
   */
  scale_factor?: number;
  /**
   * Minimum and maximum cooldown time-range (positive, in seconds) between each attempted jump.
   */
  cooldown_range?: [number, number];
  /**
   * Blocks that the mob can't jump to.
   */
  forbidden_blocks?: Array<BlockIdentifier>;
  /**
   * The maximum velocity with which the mob can jump.
   * @default 1.5
   */
  max_velocity?: number;
  /**
   * The minimum distance (in blocks) from the mob to a block, in order to consider jumping to it.
   * @default 2
   */
  minimum_distance?: number;
  /**
   * Blocks that the mob prefers jumping to.
   */
  preferred_blocks?: Array<BlockIdentifier>;
  /**
   * Chance (between 0.0 and 1.0) that the mob will jump to a preferred block, if in range. Only matters if preferred blocks are defined.
   * @default 1
   */
  preferred_blocks_chance?: number;
};
