import { EntityEventTrigger } from "../entity_behavior/event.js";

/**
 * Creates a trigger based on environment conditions.
 */
export type EntityEnvironmentSensorComponent = {
  triggers?: Array<EntityEventTrigger> | EntityEventTrigger;
};
