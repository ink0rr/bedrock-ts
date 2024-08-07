/**
 * Determines if an item is rendered like a tool while in hand.
 */
export type ItemHandEquippedComponent =
  | {
      /**
       * Determines if the item is rendered like a tool in-hand.
       */
      value?: boolean;
    }
  | boolean;
