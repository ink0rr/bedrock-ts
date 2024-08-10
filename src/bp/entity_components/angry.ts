// auto generated
import { Filter } from "../../shared/filter.js";
import { SoundEvent } from "../../shared/sound_event.js";
import { EntityEventTrigger } from "../entity_behavior/event.js";

/**
 * Defines the entity's 'angry' state using a timer.
 */
export type EntityAngryComponent = {
  /**
   * If true, other entities of the same entity definition within the broadcastRange will also become angry.
   */
  broadcast_anger?: boolean;
  /**
   * If true, other entities of the same entity definition within the broadcastRange will also become angry.
   */
  broadcastAnger?: boolean;
  /**
   * If true, other entities of the same entity definition within the broadcastRange will also become angry whenever this mob attacks.
   */
  broadcast_anger_on_attack?: boolean;
  /**
   * If true, other entities of the same entity definition within the broadcastRange will also become angry whenever this mob is attacked.
   */
  broadcast_anger_on_being_attacked?: boolean;
  /**
   * Distance in blocks within which other entities of the same entity definition will become angry.
   * @default 20
   */
  broadcast_range?: number;
  /**
   * Distance in blocks within which other entities of the same entity definition will become angry.
   * @default 20
   */
  broadcastRange?: number;
  /**
   * Conditions that make this entry in the list valid.
   */
  broadcast_filters?: Filter;
  /**
   * Filter out mob types that it should not attack while angry (other Piglins).
   */
  filters?: Filter;
  /**
   * A list of entity families to broadcast anger to.
   */
  broadcast_targets?: Array<string>;
  /**
   * Event to run after the number of seconds specified in duration expires (when the entity stops being 'angry').
   */
  calm_event?: EntityEventTrigger;
  /**
   * The amount of time in seconds that the entity will be angry.
   * @default 25
   */
  duration?: number;
  /**
   * Variance in seconds added to the duration [-delta, delta].
   */
  duration_delta?: number;
  /**
   * The sound event to play when the mob is angry.
   */
  angry_sound?: SoundEvent;
  /**
   * The range of time in seconds to randomly wait before playing the sound again.
   */
  sound_interval?: {
    range_min?: number;
    range_max?: number;
  };
};
