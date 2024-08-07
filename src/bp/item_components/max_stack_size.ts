/**
 * Determines how many of the item can be stacked.
 */
export type ItemMaxStackSizeComponent =
  | {
      /**
       * How many of an item that can be stacked together.
       */
      value?: number;
    }
  | number;
