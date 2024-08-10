// auto generated
import { SoundEvent } from "../../shared/sound_event.js";
import { EntityEventTrigger } from "../entity_behavior/event.js";

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
  on_admire_item_start?: EntityEventTrigger;
  on_admire_item_stop?: EntityEventTrigger;
};
