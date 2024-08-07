/**
 * Allows an entity to attack by sneaking and pouncing.
 */
export type EntityBehaviorOcelotattackComponent = {
  priority?: number;
  /**
   * Modifies the attacking entity's movement speed while sneaking.
   * @default 0.6
   */
  sneak_speed_multiplier?: number;
  /**
   * Modifies the attacking entity's movement speed while sprinting.
   * @default 1.33
   */
  sprint_speed_multiplier?: number;
  /**
   * Modifies the attacking entity's movement speed when not sneaking or sprinting, but still within attack range.
   * @default 0.8
   */
  walk_speed_multiplier?: number;
  /**
   * Time (in seconds) between attacks.
   * @default 1
   */
  cooldown_time?: number;
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
  /**
   * Max distance from the target, this entity will use this attack behavior.
   * @default 15
   */
  max_distance?: number;
  /**
   * Max distance from the target, this entity starts sneaking.
   * @default 15
   */
  max_sneak_range?: number;
  /**
   * Max distance from the target, this entity starts sprinting (sprinting takes priority over sneaking).
   * @default 4
   */
  max_sprint_range?: number;
  /**
   * Used with the base size of the entity to determine minimum target-distance before trying to deal attack damage.
   * @default 2
   */
  reach_multiplier?: number;
};
