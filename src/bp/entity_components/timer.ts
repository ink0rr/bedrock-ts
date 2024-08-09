import { EntityEventTrigger } from "../entity_behavior/event.js";

/**
 * Adds a timer after which an event will fire.
 */
export type EntityTimerComponent = {
  /**
   * If true, the timer will restart every time after it fires.
   * @default true
   */
  looping?: boolean;
  /**
   * If true, the amount of time on the timer will be random between the min and max values specified in time.
   * @default true
   */
  randomInterval?: boolean;
  /**
   * If true, the amount of time on the timer will be random between the min and max values specified in time.
   * @default true
   */
  random_interval?: boolean;
  /**
   * Amount of time in seconds for the timer. Can be specified as a number or a pair of numbers (min and max). Incompatible with random_time_choices.
   */
  time?: number | Array<number>;
  /**
   * This is a list of objects, representing one value in seconds that can be picked before firing the event and an optional weight. Incompatible with time.
   */
  random_time_choices?: Array<{
    weight?: number;
    value?: number;
  }>;
  /**
   * Event to fire when the time on the timer runs out.
   */
  time_down_event?: EntityEventTrigger;
};
