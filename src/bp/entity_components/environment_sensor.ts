import { EventTriggerFiltered } from "../../shared/event_trigger.js";

/**
 * Creates a trigger based on environment conditions.
 */
export type EntityEnvironmentSensorComponent = {
  triggers?: Array<EventTriggerFiltered> | EventTriggerFiltered;
};
