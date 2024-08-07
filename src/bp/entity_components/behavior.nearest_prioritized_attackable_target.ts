import { EntityBehaviorPrioritizedType } from "../entity_behavior/prioritized_type.js";

/**
 * Allows the mob to check for and pursue the nearest valid target.
 */
export type EntityBehaviorNearestPrioritizedAttackableTargetComponent = {
  priority?: number;
  set_persistent?: boolean;
  /**
   * Time in seconds before selecting a target.
   */
  attack_interval?: number;
  /**
   * The amount of time in seconds that the mob has to wait before selecting a target of the same type again
   */
  cooldown?: number;
  within_radius?: number;
  /**
   * If true, only entities that this mob can path to can be selected as targets.
   */
  must_reach?: boolean;
  /**
   * If true, only entities in this mob's viewing range can be selected as targets.
   */
  must_see?: boolean;
  /**
   * Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more.
   * @default 3
   */
  must_see_forget_duration?: boolean;
  /**
   * If true, the target will change to the current closest entity whenever a different entity is closer.
   */
  reselect_targets?: boolean;
  /**
   * Height in blocks to search for a target mob. -1.0f means the height does not matter.
   * @default -1
   */
  target_search_height?: number;
  /**
   * Time in seconds for a valid target to stay targeted when it becomes and invalid target.
   */
  persist_time?: number;
  /**
   * List of entity types that this mob considers valid targets.
   */
  entity_types?: EntityBehaviorPrioritizedType;
};
