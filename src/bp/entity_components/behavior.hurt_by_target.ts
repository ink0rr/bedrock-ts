import { EntityBehaviorType } from "../entity_behavior/type.js";

/**
 * Allows the mob to target another mob that hurts them.
 */
export type EntityBehaviorHurtByTargetComponent = {
  priority?: number;
  /**
   * If true, nearby mobs of the same type will be alerted about the damage.
   */
  alert_same_type?: boolean;
  /**
   * List of entity types that this mob can target when hurt by them.
   */
  entity_types?: EntityBehaviorType;
  /**
   * If true, the mob will hurt its owner and other mobs with the same owner as itself.
   */
  hurt_owner?: boolean;
};
