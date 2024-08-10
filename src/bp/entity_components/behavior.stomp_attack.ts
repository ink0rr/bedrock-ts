// auto generated
import { EntityEventTrigger } from "../entity_behavior/event.js";

/**
 * Allows an entity to attack using stomp AoE damage behavior.
 */
export type EntityBehaviorStompAttackComponent = {
  priority?: number;
  /**
   * Allows the entity to use this attack behavior, only once EVER.
   */
  attack_once?: boolean;
  /**
   * Defines the entity types this entity will attack.
   */
  attack_types?: string;
  /**
   * This entity will have a 1 in N chance to stop it's current attack, where N = 'random_stop_interval'.
   */
  random_stop_interval?: number;
  /**
   * Used with the base size of the entity to determine minimum target-distance before trying to deal attack damage.
   * @default 2
   */
  reach_multiplier?: number;
  /**
   * Allows the entity to track the attack target, even if the entity has no sensing.
   */
  track_target?: boolean;
  /**
   * This multiplier modifies the attacking entity's speed when moving toward the target.
   * @default 1
   */
  speed_multiplier?: number;
  /**
   * Toggles (on/off) the need to have a full path from the entity to the target when using this melee attack behavior.
   */
  require_complete_path?: boolean;
  /**
   * Multiplied with the base size of the entity to determine stomp AoE damage range.
   * @default 2
   */
  stomp_range_multiplier?: number;
  /**
   * Multiplied with the final AoE damage range to determine a no damage range. The stomp attack will go on cooldown if target is in this no damage range.
   * @default 2
   */
  no_damage_range_multiplier?: number;
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
   * Field of view (in degrees) when using the sensing component to detect an attack target.
   * @default 90
   */
  melee_fov?: number;
  /**
   * Minimum base time (in seconds) to recalculate new attack path to target (before increases applied).
   * @default 0.2
   */
  min_path_time?: number;
  /**
   * Defines the event to trigger when this entity successfully attacks.
   */
  on_attack?: EntityEventTrigger;
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
};
