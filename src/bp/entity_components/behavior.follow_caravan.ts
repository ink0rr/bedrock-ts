// auto generated
import { EntityBehaviorType } from "../entity_behavior/type.js";

/**
 * Allows the mob to follow mobs that are in a caravan.
 */
export type EntityBehaviorFollowCaravanComponent = {
  priority?: number;
  /**
   * Movement speed multiplier of the mob when using this AI Goal.
   * @default 1
   */
  speed_multiplier?: number;
  /**
   * Number of entities that can be in the caravan.
   * @default 1
   */
  entity_count?: number;
  /**
   * List of entity types that this mob can follow in a caravan.
   */
  entity_types?: EntityBehaviorType;
};
