import { EventTrigger } from "../../shared/event_trigger.js";

/**
 * Event to run when a raid is triggered on the village.
 */
export type EntityRaidTriggerComponent = {
  /**
   * Event to run we attempt to trigger a raid on the village.
   */
  triggered_event?: EventTrigger;
};
