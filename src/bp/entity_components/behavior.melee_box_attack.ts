// auto generated
import { EntityEventTrigger } from "../entity_behavior/event.js";

/**
 * Allows an entity to deal damage through a melee attack.
 */
export type EntityBehaviorMeleeBoxAttackComponent = {
  priority?: number;
  /**
   * Allows the entity to use this attack behavior, only once EVER.
   */
  attack_once?: boolean;
  /**
   * The allowable FOV the actor will use to determine if it can make a valid melee attack.
   * @default 90
   */
  melee_fov?: number;
  /**
   * Defines the probability the mob will stop fighting. A value of 0 disables randomly stopping, while a value of 1 defines a 50% chance.
   */
  random_stop_interval?: number;
  /**
   * The attack reach of the mob will be a box with the size of the mobs bounds increased by this value in all horizontal directions.
   * @default 0.8
   */
  horizontal_reach?: number;
  /**
   * If true, this goal will only trigger if the mob can reach its target.
   */
  require_complete_path?: boolean;
  /**
   * Movement speed multiplier of the mob when using this AI Goal.
   * @default 1
   */
  speed_multiplier?: number;
  /**
   * If true, this mob will chase after the target as long as it's a valid target.
   */
  track_target?: boolean;
  untrackable_cooldown_delay?: number;
  target_tracking?: {
    refresh_period_min?: number;
    refresh_period_max?: number;
    backoff?: Array<{
      distance_squared_gt?: number;
      refresh_period_delta?: number;
    }>;
  };
  on_attack?: EntityEventTrigger;
  on_kill?: EntityEventTrigger;
  /**
   * Cooldown time (in seconds) between attacks.
   * @default 1
   */
  cooldown_time?: number;
  /**
   * Time (in seconds) to add to attack path recalculation when the target is beyond the 'path_inner_boundary'.
   * @default 0.25
   */
  inner_boundary_time_increase?: number;
  /**
   * Maximum base time (in seconds) to recalculate new attack path to target (before increases applied).
   * @default 0.55
   */
  max_path_time?: number;
  /**
   * Minimum base time (in seconds) to recalculate new attack path to target (before increases applied).
   * @default 0.2
   */
  min_path_time?: number;
  /**
   * Time (in seconds) to add to attack path recalculation when the target is beyond the 'path_outer_boundary'.
   * @default 0.5
   */
  outer_boundary_time_increase?: number;
  /**
   * Time (in seconds) to add to attack path recalculation when this entity cannot move along the current path.
   * @default 0.75
   */
  path_fail_time_increase?: number;
  /**
   * Distance at which to increase attack path recalculation by 'inner_boundary_tick_increase'.
   * @default 16
   */
  path_inner_boundary?: number;
  /**
   * Distance at which to increase attack path recalculation by 'outer_boundary_tick_increase'.
   * @default 32
   */
  path_outer_boundary?: number;
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
  /**
   * If the entity is on fire, this allows the entity's target to catch on fire after being hit.
   */
  can_spread_on_fire?: boolean;
};
