import { EntityBehaviorType } from "../entity_behavior/type.js";

/**
 * Allows the mob to stay in the village and fight mobs hostile to the villagers.
 */
export type EntityBehaviorDefendVillageTargetComponent = {
  priority?: number;
  /**
   * List of entity types that this mob considers valid targets.
   */
  entity_types?: EntityBehaviorType;
  must_reach?: boolean;
  /**
   * The percentage chance that the entity has to attack aggressors of its village, where 1.0 = 100%.
   * @default 0.05
   */
  attack_chance?: number;
};
