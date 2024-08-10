// auto generated
import { MoLang } from "../../shared/molang.js";
import { SoundEvent } from "../../shared/sound_event.js";

export type EntityHeartbeatComponent = {
  /**
   * A Molang expression defining the inter-beat interval in seconds. A value of zero or less means no heartbeat.
   */
  interval?: MoLang;
  /**
   * Level sound event to be played as the heartbeat sound.
   */
  sound_event?: SoundEvent;
};
