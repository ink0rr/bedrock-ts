import { BlockIdentifier } from "../../shared/literals/block_identifier.js";
import { EntityEventTrigger } from "../entity_behavior/event.js";

/**
 * Digger item. Component put on items that dig, similar to pickaxes and axes.
 */
export type ItemDiggerComponent = {
  /**
   * Use efficiency? Default is set to false.
   */
  use_efficiency?: boolean;
  /**
   * Destroy speed per block.
   */
  destroy_speeds?: Array<{
    /**
     * Blocks/block tags that are broken at the set speed.
     */
    block?:
      | BlockIdentifier
      | {
          tags?: "query.any_tag()" | "query.all_tags()" | string;
        };
    /**
     * Destroy speed of the block.
     */
    speed?: number;
    /**
     * Trigger for when you dig a block referenced to in 'block'.
     */
    on_dig?: EntityEventTrigger;
  }>;
};
