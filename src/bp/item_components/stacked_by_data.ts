/**
 * Determines if the same item with different aux values can stack. Additionally, defines whether the item actors can merge while floating in the world.
 */
export type ItemStackedByDataComponent =
  | {
      /**
       * Sets whether the same item with different aux values can stack and merge while floating in the world.
       */
      value?: boolean;
    }
  | boolean;
