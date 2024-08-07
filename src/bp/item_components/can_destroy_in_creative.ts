/**
 * Determines if the item will break blocks in Creative Mode while swinging.
 */
export type ItemCanDestroyInCreativeComponent =
  | {
      /**
       * Defines whether the item can destroy blocks while in creative.
       */
      value?: boolean;
    }
  | boolean;
