// auto generated
import { Filter } from "../../shared/filter.js";
import { EntityEventTrigger } from "../entity_behavior/event.js";

/**
 * Defines the behavior when another entity looks at this entity.
 */
export type EntityLookatComponent = {
  /**
   * Maximum distance this entity will look for another entity looking at it.
   * @default 10
   */
  search_radius?: number;
  /**
   * If true, this entity will set the attack target as the entity that looked at it.
   * @default true
   */
  set_target?: boolean;
  /**
   * The range for the random amount of time during which the entity is 'cooling down' and won't get angered or look for a target.
   */
  look_cooldown?: number;
  /**
   * Defines the entities that can trigger this component.
   */
  filters?: Filter;
  /**
   * The event identifier to run when the entities specified in filters look at this entity.
   */
  look_event?: EntityEventTrigger;
  /**
   * If true, invulnerable entities (e.g. Players in creative mode) are considered valid targets.
   */
  allow_invulnerable?: boolean;
};
