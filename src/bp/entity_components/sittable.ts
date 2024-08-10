// auto generated
import { EntityEventTrigger } from "../entity_behavior/event.js";

/**
 * Defines the entity's 'sit' state.
 */
export type EntitySittableComponent = {
  /**
   * Event to run when the entity enters the 'sit' state.
   */
  sit_event?: EntityEventTrigger;
  /**
   * Event to run when the entity exits the 'sit' state.
   */
  stand_event?: EntityEventTrigger;
};
