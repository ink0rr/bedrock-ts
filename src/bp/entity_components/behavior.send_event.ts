import { Filter } from "../../shared/filter.js";
import { HexColor } from "../../shared/hex_color.js";
import { SoundEvent } from "../../shared/sound_event.js";

/**
 * Allows the mob to send an event to another mob.
 */
export type EntityBehaviorSendEventComponent = {
  priority?: number;
  event_choices?: Array<{
    min_activation_range?: number;
    max_activation_range?: number;
    cooldown_time?: number;
    /**
     * Time in seconds for the entire event sending process.
     */
    cast_duration?: number;
    particle_color?: number | HexColor;
    weight?: number;
    filters?: Filter;
    start_sound_event?: SoundEvent;
    sequence?: Array<{
      /**
       * Amount of time in seconds before starting this step.
       */
      base_delay?: number;
      /**
       * The event to send to the entity.
       */
      event?: string;
      /**
       * The sound event to play when this step happens.
       */
      sound_event?: SoundEvent;
    }>;
    /**
     * If true, the mob will face the entity it sends an event to.
     * @default true
     */
    look_at_target?: boolean;
  }>;
};
