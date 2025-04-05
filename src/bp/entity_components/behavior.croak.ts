// auto generated
import { Filters } from "../../shared/filter.js";

/**
 * Allows the entity to croak at a random time interval with configurable conditions.
 */
export type EntityBehaviorCroakComponent = {
  priority?: number;
  /**
   * Random range in seconds after which the croaking stops.
   */
  duration?: number | [number, number];
  /**
   * Conditions for the behavior to start and keep running. The interval between runs only starts after passing the filters.
   */
  filters?: Filters;
  /**
   * Random range in seconds between runs of this behavior.
   */
  interval?: number | [number, number];
};
