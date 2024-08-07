import { EventTriggerFiltered } from "../../shared/event_trigger.js";

/**
 * Fires off scheduled mob events at time of day events.
 */
export type EntitySchedulerComponent = {
  min_delay_secs?: number;
  max_delay_secs?: number;
  /**
   * The list of triggers that fire when the conditions match the given filter criteria. If any filter criteria overlap the first defined event will be picked.
   */
  scheduled_events?: Array<EventTriggerFiltered>;
};
