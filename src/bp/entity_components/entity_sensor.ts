// auto generated
import { Filters } from "../../shared/filter.js";
import { EntityEventIdentifier } from "../entity_behavior/event.js";

/**
 * A component that owns multiple subsensors, each one firing an event when a set of conditions are met by other entities within the defined range
 */
export type EntityEntitySensorComponent = {
  /**
   * Limits the search to Players only for all subsensors.
   */
  find_players_only?: boolean;
  /**
   * If true, the subsensors' range is additive on top of the entity's size.
   * @default true
   */
  relative_range?: boolean;
  /**
   * The list of subsensors which sense for entities and emit events when all their conditions are met.
   */
  subsensors?: Array<{
    /**
     * How many seconds should elapse before the subsensor can once again sense for entities. The cooldown is applied on top of the base 1 tick (0.05 seconds) delay. Negative values will result in no cooldown being used.
     * @default -1
     */
    cooldown?: number;
    event?: EntityEventIdentifier;
    event_filters?: Filters;
    /**
     * The maximum number of entities that must pass the filter conditions for the event to send.
     * @default -1
     */
    maximum_count?: number;
    /**
     * The minimum number of entities that must pass the filter conditions for the event to send.
     * @default 1
     */
    minimum_count?: number;
    /**
     * The maximum horizontal and vertical distance another entity can be from this and have the filters checked against it.
     */
    range?: Array<number>;
    /**
     * If true requires all nearby entities to pass the filter conditions for the events to send.
     */
    require_all?: boolean;
    /**
     * Vertical offset applied to the entity's position when computing the distance from other entities.
     */
    y_offset?: number;
  }>;
};
