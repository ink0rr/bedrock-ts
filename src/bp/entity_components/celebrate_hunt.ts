import { Filter } from "../../shared/filter.js";
import { SoundEvent } from "../../shared/sound_event.js";

/**
 * Specifies hunt celebration behaviour.
 */
export type EntityCelebrateHuntComponent = {
  /**
   * The list of conditions that target of hunt must satisfy to initiate celebration.
   */
  celebration_targets?: Filter;
  /**
   * If true, celebration will be broadcasted to other entities in the radius.
   * @default true
   */
  broadcast?: boolean;
  /**
   * Duration, in seconds, of celebration.
   * @default 4
   */
  duration?: number;
  /**
   * If broadcast is enabled, specifies the radius in which it will notify other entities for celebration.
   * @default 16
   */
  radius?: number;
  /**
   * The sound event to play when the mob is celebrating.
   */
  celebrate_sound?: SoundEvent;
  /**
   * The range of time in seconds to randomly wait before playing the sound again.
   */
  sound_interval?: {
    range_min?: number;
    range_max?: number;
  };
};
