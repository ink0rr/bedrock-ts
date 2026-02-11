// auto generated
import { BlockState } from "../../shared/block_state.js";
import { BlockIdentifier } from "../../shared/literals/block_identifier.js";
import { MoLang } from "../../shared/molang.js";

export namespace BlockPlacementFilterComponent {
  export type PlacementRule = {
    /**
     * List of blocks that this block can be placed against in the 'allowed_faces' direction. Limited to 64 blocks. Each block in this list can either be specified as a String (block name) or as a BlockDescriptor. A BlockDescriptor is an object that allows you to reference a block (or multiple blocks) based on its tags, or based on its name and states.
     */
    block_filter?: Array<
      | BlockIdentifier
      | {
          /**
           * The name of a block.
           */
          name?: BlockIdentifier;
          /**
           * The list of Vanilla block states and their values that the block can have, expressed in key/value pairs.
           */
          states?: BlockState;
          /**
           * A condition using Molang queries that results to true/false that can be used to query for blocks with certain tags.
           */
          tags?: MoLang;
        }
    >;
    /**
     * Defines the block faces this block can be placed on, e.g 'down' means you can only place this block on th bottom face of the block. If the block it is placed on is removed, this block will be destroyed
     */
    allowed_faces?: Array<"up" | "down" | "north" | "south" | "east" | "west" | "side" | "all">;
  };
}
/**
 * Sets rules for under what conditions the block can be placed/survive.
 */
export type BlockPlacementFilterComponent = {
  /**
   * List of conditions where the block can be placed/survive.
   */
  conditions?: Array<BlockPlacementFilterComponent.PlacementRule>;
};
