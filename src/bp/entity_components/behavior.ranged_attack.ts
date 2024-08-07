/**
 * Allows an entity to attack by using ranged shots. 'charge_shoot_trigger' must be greater than 0 to enable charged up burst-shot attacks.
 */
export type EntityBehaviorRangedAttackComponent = {
  priority?: number;
  /**
   * Alternative to 'attack_interval_min' & 'attack_interval_max'. Consistent reload-time (in seconds), when not using a charged shot. Does not scale with target-distance.
   */
  attack_interval?: number;
  /**
   * Maximum bound for reload-time range (in seconds), when not using a charged shot. Reload-time range scales with target-distance.
   */
  attack_interval_max?: number;
  /**
   * Minimum bound for reload-time range (in seconds), when not using a charged shot. Reload-time range scales with target-distance.
   */
  attack_interval_min?: number;
  /**
   * Minimum distance to target before this entity will attempt to shoot.
   */
  attack_radius?: number;
  /**
   * Minimum distance the target can be for this mob to fire. If the target is closer, this mob will move first before firing
   */
  attack_radius_min?: number;
  /**
   * Number of shots fired every time the attacking entity uses a charged up attack.
   * @default 1
   */
  burst_shots?: number;
  /**
   * Time (in seconds) between each individual shot when firing a burst of shots from a charged up attack.
   */
  burst_interval?: number;
  /**
   * Time (in seconds, then add 'charge_shoot_trigger'), before a charged up attack is done charging. Charge-time decays while target is not in sight.
   */
  charge_charged_trigger?: number;
  /**
   * Amount of time (in seconds, then doubled) a charged shot must be charging before reloading burst shots. Charge-time decays while target is not in sight.
   */
  charge_shoot_trigger?: number;
  /**
   * Field of view (in degrees) when using sensing to detect a target for attack.
   * @default 90
   */
  ranged_fov?: number;
  /**
   * During attack behavior, this multiplier modifies the entity's speed when moving toward the target.
   * @default 1
   */
  speed_multiplier?: number;
  /**
   * Minimum amount of time (in seconds) the attacking entity needs to see the target before moving toward it.
   * @default 1
   */
  target_in_sight_time?: number;
  /**
   * If a swing animation (using variable.attack_time) exists, this causes the actor to swing their arm(s) upon firing the ranged attack.
   */
  swing?: boolean;
  /**
   * Allows the actor to be set to persist upon targeting a player.
   */
  set_persistent?: boolean;
  /**
   * Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target.
   * @default 30
   */
  x_max_rotation?: number;
  /**
   * Maximum rotation (in degrees), on the Y-axis, this entity can rotate its head while trying to look at the target.
   * @default 30
   */
  y_max_head_rotation?: number;
};
