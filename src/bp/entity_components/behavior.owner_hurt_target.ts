// auto generated
import { EntityBehaviorType } from "../entity_behavior/type.js";

/**
 * Allows the mob to target a mob that is hurt by their owner.
 */
export type EntityBehaviorOwnerHurtTargetComponent = {
  priority?: number;
  /**
   * List of entity types that this entity can target if the potential target is hurt by this mob's owner.
   */
  entity_types?: EntityBehaviorType;
};
