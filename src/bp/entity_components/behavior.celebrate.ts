import { SoundEvent } from "../../shared/sound_event.js";
import { EntityEventTrigger } from "../entity_behavior/event.js";

/**
 * Allows this entity to celebrate surviving a raid by making celebration sounds and jumping.
 */
export type EntityBehaviorCelebrateComponent = {
  priority?: number;
  /**
   * The sound event to trigger during the celebration.
   */
  celebration_sound?: SoundEvent;
  /**
   * Minimum and maximum time between sound events (positive, in seconds).
   */
  sound_interval?: {
    range_min?: number;
    range_max?: number;
  };
  /**
   * Minimum and maximum time between jumping (positive, in seconds).
   */
  jump_interval?: {
    range_min?: number;
    range_max?: number;
  };
  /**
   * The duration in seconds that the celebration lasts for.
   * @default 30
   */
  duration?: number;
  /**
   * The event to trigger when the goal's duration expires.
   */
  on_celebration_end_event?: EntityEventTrigger;
};
