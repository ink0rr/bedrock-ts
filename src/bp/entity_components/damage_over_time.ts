/**
 * Applies defined amount of damage to the entity at specified intervals.
 */
export type EntityDamageOverTimeComponent = {
  /**
   * Amount of damage caused each hurt.
   * @default 1
   */
  damage_per_hurt?: number;
  /**
   * Time in seconds between damage.
   */
  time_between_hurt?: number;
};
