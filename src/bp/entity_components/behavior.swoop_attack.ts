// auto generated
/**
 * Allows an entity to attack using swoop attack behavior; Ideal for use with flying mobs. The behavior ends if the entity has a horizontal collision or gets hit.
 */
export type EntityBehaviorSwoopAttackComponent = {
  priority?: number;
  /**
   * Added to the base size of the entity, to determine the target's maximum allowable distance, when trying to deal attack damage.
   * @default 0.2
   */
  damage_reach?: number;
  /**
   * During swoop attack behavior, this determines the multiplier the entity's speed is modified by when moving toward the target.
   * @default 1
   */
  speed_multiplier?: number;
  /**
   * Minimum and maximum cooldown time-range (in seconds) between each attempted swoop attack.
   */
  delay_range?: [number, number];
};
