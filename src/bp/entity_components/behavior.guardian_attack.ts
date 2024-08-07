/**
 * Allows this entity to use a laser beam attack. Can only be used by Guardians and Elder Guardians.
 */
export type EntityBehaviorGuardianAttackComponent = {
  priority?: number;
  /**
   * Amount of additional damage dealt from an elder guardian's magic attack.
   * @default 2
   */
  elder_extra_magic_damage?: number;
  /**
   * In hard difficulty, amount of additional damage dealt from a guardian's magic attack.
   * @default 2
   */
  hard_mode_extra_magic_damage?: number;
  /**
   * Amount of damage dealt from a guardian's magic attack. Magic attack damage is added to the guardian's base attack damage.
   * @default 1
   */
  magic_damage?: number;
  /**
   * Guardian attack behavior stops if the target is closer than this distance (doesn't apply to elders).
   * @default 3
   */
  min_distance?: number;
  /**
   * Time (in seconds) to wait after starting an attack before playing the guardian attack sound.
   * @default 0.5
   */
  sound_delay_time?: number;
  /**
   * Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target.
   * @default 90
   */
  x_max_rotation?: number;
  /**
   * Maximum rotation (in degrees), on the Y-axis, this entity can rotate its head while trying to look at the target.
   * @default 90
   */
  y_max_head_rotation?: number;
};
