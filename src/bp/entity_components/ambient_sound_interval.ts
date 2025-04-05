// auto generated
import { MoLang } from "../../shared/molang.js";
import { SoundEvent } from "../../shared/sound_event.js";

/**
 * Sets the entity's delay between playing its ambient sound.
 */
export type EntityAmbientSoundIntervalComponent = {
  /**
   * Maximum time in seconds to randomly add to the ambient sound delay time.
   * @default 16
   */
  range?: number;
  /**
   * Minimum time in seconds before the entity plays its ambient sound again.
   * @default 8
   */
  value?: number;
  /**
   * Level sound event to be played as the ambient sound.
   * @default "ambient"
   */
  event_name?: SoundEvent;
  /**
   * List of dynamic level sound events, with conditions for choosing between them. Evaluated in order, first one wins. If none evaluate to true, 'event_name' will take precedence.
   */
  event_names?: Array<{
    /**
     * The condition that must be satisfied to select the given ambient sound.
     */
    condition?: MoLang;
    /**
     * Level sound event to be played as the ambient sound.
     */
    event_name?: SoundEvent;
  }>;
};
