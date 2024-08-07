/**
 * Determine whether an item can be placed in the off-hand slot of the inventory.
 */
export type ItemAllowOffHandComponent =
  | {
      /**
       * Whether the item can be placed in the off-hand slot.
       */
      value?: boolean;
    }
  | boolean;
