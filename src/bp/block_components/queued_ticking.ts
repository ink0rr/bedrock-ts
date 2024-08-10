import { EntityEventTrigger } from "../entity_behavior/event.js";

/**
 * Triggers the specified event, either once, or at a regular interval equal to a number of ticks randomly chosen from the interval_range provided.
 */
export type BlockQueuedTickingComponent = {
  /**
   * Does the event loop? If false, the event will only be triggered once, after a delay equal to a number of ticks randomly chosen from the interval_range. If true, the event will loop, and each interval between events will be equal to a number of ticks randomly chosen from the interval_range.
   * @default true
   */
  looping?: boolean;
  /**
   * The range between which the component will trigger his event.
   */
  interval_range?: [number, number];
  /**
   * The event that will be triggered once or on an interval.
   */
  on_tick?: EntityEventTrigger;
};
