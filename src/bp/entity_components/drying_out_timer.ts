import { EventTriggerFiltered } from "../../shared/event_trigger.js";

/**
 * Adds a timer for drying out that will count down and fire 'dried_out_event' or will stop as soon as the entity will get under rain or water and fire 'stopped_drying_out_event'.
 */
export type EntityDryingOutTimerComponent = {
  /**
   * Event to fire when the drying out time runs out.
   */
  dried_out_event?: EventTriggerFiltered;
  /**
   * Event to fire when entity was already dried out but received increase in water supply.
   */
  recover_after_dried_out_event?: EventTriggerFiltered;
  /**
   * Event to fire when entity stopped drying out, for example got into water or under rain.
   */
  stopped_drying_out_event?: EventTriggerFiltered;
  /**
   * Amount of time in seconds to dry out fully.
   */
  total_time?: number;
  /**
   * Optional amount of additional time in seconds given by using splash water bottle on entity.
   */
  water_bottle_refill_time?: number;
};
