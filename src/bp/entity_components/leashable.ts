import { EventTriggerFiltered } from "../../shared/event_trigger.js";

/**
 * Allows this entity to be leashed and defines the conditions and events for this entity when is leashed.
 */
export type EntityLeashableComponent = {
  /**
   * Distance in blocks at which the 'spring' effect starts acting to keep this entity close to the entity that leashed it.
   * @default 4
   */
  soft_distance?: number;
  /**
   * Distance in blocks at which the leash stiffens, restricting movement.
   * @default 6
   */
  hard_distance?: number;
  /**
   * Distance in blocks at which the leash breaks.
   * @default 10
   */
  max_distance?: number;
  /**
   * Event to call when this entity is leashed.
   */
  on_leash?: EventTriggerFiltered;
  /**
   * Event to call when this entity is unleashed.
   */
  on_unleash?: EventTriggerFiltered;
  /**
   * Event to call when this entity is unleashed.
   */
  can_be_stolen?: boolean;
};
