/**
 * Determines how much extra damage the item does on attack.
 */
export type ItemDamageComponent =
  | {
      /**
       * How much extra damage the item does on attack. Note that this must be a positive value.
       */
      value?: number;
    }
  | number;
