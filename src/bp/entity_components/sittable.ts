import { EventTrigger } from "../../shared/event_trigger.js";

/**
 * Defines the entity's 'sit' state.
 */
export type EntitySittableComponent = {
  /**
   * Event to run when the entity enters the 'sit' state.
   */
  sit_event?: EventTrigger;
  /**
   * Event to run when the entity exits the 'sit' state.
   */
  stand_event?: EventTrigger;
};
