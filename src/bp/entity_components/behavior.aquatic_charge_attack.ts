// auto generated
/**
 * Enables an aquatic mob to dash at its target with knockback; includes overshoot and cooldown settings.
 */
export type EntityBehaviorAquaticChargeAttackComponent = {
  priority?: number;
  control_flags?: string;
  /**
   * Horizontal reach grown around the mob's AABB to register a hit.
   */
  attack_reach?: number;
  /**
   * Range of time in seconds to wait before starting another charge.
   */
  charge_cooldown_time?: {
    min?: number;
    max?: number;
  };
  /**
   * Distance beyond the target the mob aims during a charge.
   */
  charge_overshoot_distance?: number;
  /**
   * Speed multiplier applied during the charge.
   */
  charge_speed_multiplier?: number;
  /**
   * Knockback force applied to the target on hit.
   */
  knockback_force?: number;
  /**
   * Maximum distance at which the mob attempts a charge.
   */
  max_charge_distance?: number;
};
