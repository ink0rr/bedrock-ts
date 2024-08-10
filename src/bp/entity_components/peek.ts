// auto generated
import { EntityEventTrigger } from "../entity_behavior/event.js";

/**
 * Defines the entity's 'peek' behavior, defining the events that should be called during it.
 */
export type EntityPeekComponent = {
  /**
   * Event to call when the entity starts peeking.
   */
  on_open?: EntityEventTrigger;
  /**
   * Event to call when the entity is done peeking.
   */
  on_close?: EntityEventTrigger;
  /**
   * Event to call when the entity's target entity starts peeking.
   */
  on_target_open?: EntityEventTrigger;
};
