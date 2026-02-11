// auto generated
/**
 * Enables a mob to use kinetic weaponry by intermittently charging at its target and repositioning afterward.
 */
export type EntityBehaviorUseKineticWeaponComponent = {
  priority?: number;
  control_flags?: string;
  /**
   * The distance to the target within which the mob begins using its kinetic weapon.
   */
  approach_distance?: number;
  /**
   * Allows the mob to perform this melee attack behavior only once during its lifetime.
   */
  attack_once?: boolean;
  /**
   * Allows the mob, if on fire and empty handed, to ignite its target upon a successful attack.
   */
  can_spread_on_fire?: boolean;
  /**
   * The distance the mob retreats to after all of the item's "minecraft:kinetic_weapon" component's "max_duration" values have elapsed. After reaching this position and once "cooldown" has elapsed, the mob will approach again. This value is added to the reach midpoint.
   */
  cooldown_distance?: {
    min?: number;
    max?: number;
  };
  /**
   * Multiplier applied to the mob's movement speed while on cooldown.
   */
  cooldown_speed_multiplier?: number;
  /**
   * Cooldown time, in seconds, between consecutive attacks.
   */
  cooldown_time?: number;
  /**
   * Time, in seconds, added to the attack path recalculation interval when the target is beyond "path_inner_boundary".
   */
  inner_boundary_time_increase?: number;
  /**
   * Maximum base time, in seconds, before recalculating a new attack path to the target (before increases are applied).
   */
  max_path_time?: number;
  /**
   * Field of view, in degrees, used by the hard-coded sensing component to detect a valid attack target.
   */
  melee_fov?: number;
  /**
   * Minimum base time, in seconds, before recalculating a new attack path to the target (before increases are applied).
   */
  min_path_time?: number;
  /**
   * Time, in seconds, added to the attack path recalculation interval when the target is beyond "path_outer_boundary".
   */
  outer_boundary_time_increase?: number;
  /**
   * Time, in seconds, added to the attack path recalculation interval when the mob cannot move along the current path.
   */
  path_fail_time_increase?: number;
  /**
   * Distance at which to increase attack path recalculation by "inner_boundary_time_increase".
   */
  path_inner_boundary?: number;
  /**
   * Distance at which to increase attack path recalculation by "outer_boundary_time_increase".
   */
  path_outer_boundary?: number;
  /**
   * Defines a 1-in-N chance for the mob to stop its current attack, where N equals "random_stop_interval".
   */
  random_stop_interval?: number;
  /**
   * The distance the mob retreats to once the target is closer than the midpoint of the item's "minecraft:kinetic_weapon" component's minimum and maximum "reach". After reaching this position, the mob will charge again. This value is added to the reach midpoint.
   */
  reposition_distance?: {
    min?: number;
    max?: number;
  };
  /**
   * Multiplier applied to the mob's movement speed while repositioning.
   */
  reposition_speed_multiplier?: number;
  /**
   * Specifies whether a full navigation path from the mob to the target is required.
   */
  require_complete_path?: boolean;
  /**
   * Multiplier applied to the mob's movement speed when moving toward its target.
   */
  speed_multiplier?: number;
  /**
   * Allows the mob to track its target even if it lacks a hard-coded sensing component.
   */
  track_target?: boolean;
  /**
   * Multiplier applied to each "min_speed" and "min_relative_speed" condition in the item's "minecraft:kinetic_weapon" component.
   */
  weapon_min_speed_multiplier?: number;
  /**
   * Multiplier applied to the item's "minecraft:kinetic_weapon" component's "reach".
   */
  weapon_reach_multiplier?: number;
  /**
   * Maximum rotation, in degrees, on the X-axis while the mob is trying to look at its target.
   */
  x_max_rotation?: number;
  /**
   * Maximum rotation, in degrees, on the Y-axis while the mob is trying to look at its target.
   */
  y_max_head_rotation?: number;
  /**
   * Allows the mob to override its mount's navigation behavior with the logic defined by this goal. Requires the mount to be running the "minecraft:behavior.mount_pathing" goal, which default behavior will be ignored.
   */
  hijack_mount_navigation?: boolean;
};
