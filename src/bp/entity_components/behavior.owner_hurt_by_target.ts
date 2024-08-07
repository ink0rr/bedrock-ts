import { EntityBehaviorType } from "../entity_behavior/type.js";

/**
 * Allows the mob to target another mob that hurts their owner.
 */
export type EntityBehaviorOwnerHurtByTargetComponent = {
  priority?: number;
  /**
   * List of entity types that this mob can target if they hurt their owner.
   */
  entity_types?: EntityBehaviorType;
};
