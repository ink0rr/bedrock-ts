// auto generated
import { EntityBehaviorType } from "../entity_behavior/type.js";

/**
 * Allows the entity follow another entity. Both entities must be swimming [ie, in water].
 */
export type EntityBehaviorSwimWithEntityComponent = {
  priority?: number;
  /**
   * Percent chance to start following another entity, if not already doing so. 1.0 = 100%.
   * @default 0.1
   */
  success_rate?: number;
  /**
   * Percent chance to stop following the current entity, if they're riding another entity or they're not swimming. 1.0 = 100%.
   * @default 0.333
   */
  chance_to_stop?: number;
  /**
   * Time (in seconds) between checks to determine if this entity should catch up to the entity being followed or match the direction of the entity being followed.
   * @default 0.5
   */
  state_check_interval?: number;
  /**
   * Distance, from the entity being followed, at which this entity will speed up to reach that entity.
   * @default 12
   */
  catch_up_threshold?: number;
  /**
   * Distance, from the entity being followed, at which this entity will try to match that entity's direction.
   * @default 2
   */
  match_direction_threshold?: number;
  /**
   * The multiplier this entity's speed is modified by when matching another entity's direction.
   * @default 2.5
   */
  catch_up_multiplier?: number;
  /**
   * The multiplier this entity's speed is modified by when trying to catch up to the entity being followed.
   * @default 1.5
   */
  speed_multiplier?: number;
  /**
   * Radius around this entity to search for another entity to follow.
   * @default 20
   */
  search_range?: number;
  /**
   * Distance, from the entity being followed, at which this entity will stop following that entity.
   * @default 5
   */
  stop_distance?: number;
  /**
   * Filters which types of entities are valid to follow.
   */
  entity_types?: EntityBehaviorType;
};
