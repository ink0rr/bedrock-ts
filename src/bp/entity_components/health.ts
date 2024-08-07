/**
 * Sets the health for the entity.
 */
export type EntityHealthComponent = {
  value?:
    | number
    | {
        range_min?: number;
        range_max?: number;
      };
  max?: number;
  min?: number;
};
