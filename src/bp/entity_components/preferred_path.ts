// auto generated
import { BlockState } from "../../shared/block_state.js";
import { BlockIdentifier } from "../../shared/literals/block_identifier.js";

/**
 * Specifies costing information for mobs that prefer to walk on preferred paths.
 */
export type EntityPreferredPathComponent = {
  /**
   * Distance mob can fall without taking damage.
   * @default 3
   */
  max_fall_blocks?: number;
  /**
   * Added cost for jumping up a node.
   */
  jump_cost?: number;
  /**
   * Cost for non-preferred blocks.
   */
  default_block_cost?: number;
  /**
   * A list of blocks with their associated cost.
   */
  preferred_path_blocks?: Array<{
    cost?: number;
    blocks?: Array<
      | BlockIdentifier
      | {
          name?: BlockIdentifier;
          states?: BlockState;
        }
    >;
  }>;
};
