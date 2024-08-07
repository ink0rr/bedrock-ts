import { EventTriggerFiltered } from "../../shared/event_trigger.js";
import { SoundEvent } from "../../shared/sound_event.js";

export type EntityBehaviorAdmireItemComponent = {
  priority?: number;
  /**
   * The sound event to play when admiring the item.
   */
  admire_item_sound?: SoundEvent;
  /**
   * The range of time in seconds to randomly wait before playing the sound again.
   */
  sound_interval?: {
    range_min?: number;
    range_max?: number;
  };
  on_admire_item_start?: EventTriggerFiltered;
  on_admire_item_stop?: EventTriggerFiltered;
};
