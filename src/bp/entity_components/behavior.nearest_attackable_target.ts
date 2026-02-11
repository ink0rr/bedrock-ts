// auto generated
import { EntityBehaviorType } from "../entity_behavior/type.js";

/**
 * Allows an entity to attack the closest target within a given subset of specific target types.
 */
export type EntityBehaviorNearestAttackableTargetComponent = {
  priority?: number;
  /**
   * Allows the actor to be set to persist upon targeting a player.
   */
  set_persistent?: boolean;
  /**
   * If true, this entity can attack its owner.
   */
  attack_owner?: boolean;
  /**
   * Time range (in seconds) between searching for an attack target, range is in (0, 'attack_interval']. Only used if 'attack_interval' is greater than 0, otherwise 'scan_interval' is used.
   */
  attack_interval?: {
    range_min?: number;
    range_max?: number;
  };
  /**
   * Filters which types of targets are valid for this entity.
   */
  entity_types?: EntityBehaviorType;
  /**
   * If true, this entity requires a path to the target.
   */
  must_reach?: boolean;
  /**
   * Determines if target-validity requires this entity to be in range only, or both in range and in sight.
   */
  must_see?: boolean;
  /**
   * Time (in seconds) the target must not be seen by this entity to become invalid. Used only if 'must_see' is true.
   * @default 3
   */
  must_see_forget_duration?: number;
  /**
   * Time (in seconds) this entity can continue attacking the target after the target is no longer valid.
   */
  persist_time?: number;
  /**
   * Allows the attacking entity to update the nearest target, otherwise a target is only reselected after each 'scan_interval' or 'attack_interval'.
   */
  reselect_targets?: boolean;
  /**
   * If 'attack_interval' is 0 or isn't declared, then between attacks: scanning for a new target occurs every amount of ticks equal to 'scan_interval', minimum value is 10.
   * @default 10
   */
  scan_interval?: number;
  /**
   * Maximum vertical target-search distance, if it's greater than the target type's 'max_dist'. A negative value defaults to 'entity_types' greatest 'max_dist'.
   * @default -1
   */
  target_search_height?: number;
  /**
   * Multiplied with the target's armor coverage percentage to modify 'max_dist' when detecting an invisible target.
   * @default 0.7
   */
  target_invisible_multiplier?: number;
  /**
   * Multiplied with the target type's 'max_dist' when trying to detect a sneaking target.
   * @default 0.8
   */
  target_sneak_visibility_multiplier?: number;
  /**
   * Maximum distance this entity can be from the target when following it, otherwise the target becomes invalid. This value is only used if the entity doesn't declare 'minecraft:follow_range'.
   */
  within_radius?: number;
  /**
   * Probability (0.0 to 1.0) that this entity will accept a found target. Checked each time a valid target is found during scanning.
   */
  target_acquistion_probability?: number;
};
