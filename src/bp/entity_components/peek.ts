import { EventTrigger } from "../../shared/event_trigger.js";

/**
 * Defines the entity's 'peek' behavior, defining the events that should be called during it.
 */
export type EntityPeekComponent = {
  /**
   * Event to call when the entity starts peeking.
   */
  on_open?: EventTrigger;
  /**
   * Event to call when the entity is done peeking.
   */
  on_close?: EventTrigger;
  /**
   * Event to call when the entity's target entity starts peeking.
   */
  on_target_open?: EventTrigger;
};
