// auto generated
import { ItemDescriptor } from "../../shared/item_descriptor.js";

export namespace BlockDestructibleByMiningComponent {
  export type ItemSpecificSpeeds =
    /**
     * Defines the destroy time of this block when mined by specific items.
     */
    Array<{
      /**
       * The speed modifier of this block's destroy time.
       */
      destroy_speed?: number;
      /**
       * The items for the speed modifier.
       */
      item?: ItemDescriptor;
    }>;
}
/**
 * Describes the destructible by mining properties for this block. If set to true, the block will take the default number of seconds to destroy. If set to false, this block is indestructible by mining. If the component is omitted, the block will take the default number of seconds to destroy.
 */
export type BlockDestructibleByMiningComponent = {
  /**
   * Sets the number of seconds it takes to destroy the block with base equipment. Greater numbers result in greater mining times.
   */
  seconds_to_destroy?: number;
  item_specific_speeds?: BlockDestructibleByMiningComponent.ItemSpecificSpeeds;
};
