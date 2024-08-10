// auto generated
/**
 * Allows the mob to attack its target by running at it.
 */
export type EntityBehaviorChargeAttackComponent = {
  priority?: number;
  /**
   * A charge attack cannot start if the entity is farther than this distance to the target.
   * @default 3
   */
  max_distance?: number;
  /**
   * A charge attack cannot start if the entity is closer than this distance to the target.
   * @default 2
   */
  min_distance?: number;
  /**
   * Modifies the entity's speed when charging toward the target.
   * @default 1
   */
  speed_multiplier?: number;
  /**
   * Percent chance this entity will start a charge attack, if not already attacking (1.0 = 100%)
   * @default 0.1428
   */
  success_rate?: number;
};
