/**
 * The record item component allows the item to play a sound when used in a jukebox.
 */
export type ItemRecordComponent = {
  /**
   * Signal strength for comparator blocks to use from 1 - 13.
   */
  comparator_signal?: number;
  /**
   * Duration of sound event in seconds float value.
   */
  duration?: number;
  /**
   * Sound event types:  13, cat, blocks, chirp, far, mall, mellohi, stal, strad, ward, 11, wait, pigstep, otherside, 5, relic. The value may be one listed below.
   */
  sound_event?:
    | "13"
    | "cat"
    | "blocks"
    | "chirp"
    | "far"
    | "mall"
    | "mellohi"
    | "stal"
    | "strad"
    | "ward"
    | "11"
    | "wait"
    | "pigstep"
    | "otherside"
    | "5"
    | "relic"
    | "precipice"
    | "creator"
    | "creator_music_box";
};
