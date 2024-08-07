import { EntityBehaviorType } from "../entity_behavior/type.js";

/**
 * Allows the mob to target the same entity its owner is targeting.
 */
export type EntityBehaviorVexCopyOwnerTargetComponent = {
  priority?: number;
  /**
   * List of entities this mob can copy the owner from.
   */
  entity_types?: EntityBehaviorType;
};
