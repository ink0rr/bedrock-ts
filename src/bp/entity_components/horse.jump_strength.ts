/**
 * Sets the strength of the entity's jump.
 */
export type EntityHorseJumpStrengthComponent = {
  value?:
    | number
    | {
        range_min?: number;
        range_max?: number;
      };
};
