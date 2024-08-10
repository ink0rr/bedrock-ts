// auto generated
import { ItemIdentifier } from "../../shared/literals/item_identifier.js";

export namespace ItemStorageItemComponent {
  export type ItemDescriptor =
    | ItemIdentifier
    | {
        tags?: "query.any_tag()" | "query.all_tags()" | string;
      };
}
/**
 * Storage Items can be used by other components to store other items within this item.
 */
export type ItemStorageItemComponent = {
  /**
   * Determines whether another Storage Item is allowed inside of this item. Default is true.
   */
  allow_nested_storage_items?: boolean;
  /**
   * List of items that are exclusively allowed in this Storage Item. If empty all items are allowed.
   */
  allowed_items?: Array<ItemStorageItemComponent.ItemDescriptor>;
  /**
   * List of items that are not allowed in this Storage Item.
   */
  banned_items?: Array<ItemStorageItemComponent.ItemDescriptor>;
  /**
   * The maximum number of different item stacks. Maximum is 64. Default is 64.
   * @default 64
   */
  max_slots?: number;
  /**
   * The maximum allowed weight of the sum of all contained items. Maximum is 64. Default is 64.
   * @default 64
   */
  max_weight_limit?: number;
  /**
   * The weight of this item when inside another Storage Item. Default is 4. 0 means item is not allowed in another Storage Item.
   */
  weight_in_storage_item?: number;
};
