/**
 * Record Item Component. Used by record items to play music.
 */
export type ItemRecordComponent = {
  /**
   * A string value correseponding to a sound event in the game code.
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
    | "pigstep";
  /**
   * A float value that determines how long particles are spawned from the JukeBox Block, should approximately match length of sound event.
   */
  duration?: number;
  /**
   * An integer value that represents the strength of the analog signal, used by the Comparator Block.
   */
  comparator_signal?: number;
};
