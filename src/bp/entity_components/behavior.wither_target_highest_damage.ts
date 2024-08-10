// auto generated
import { EntityBehaviorType } from "../entity_behavior/type.js";

/**
 * Allows the wither to focus its attacks on whichever mob has dealt the most damage to it.
 */
export type EntityBehaviorWitherTargetHighestDamageComponent = {
  priority?: number;
  /**
   * List of entity types the wither takes into account to find who dealt the most damage to it.
   */
  entity_types?: EntityBehaviorType;
};
