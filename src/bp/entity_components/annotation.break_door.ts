import { Difficulty } from "../../shared/difficulty.js";

/**
 * Allows the actor to break doors assuming that that flags set up for the component to use in navigation.
 */
export type EntityAnnotationBreakDoorComponent = {
  /**
   * The time in seconds required to break through doors.
   * @default 12
   */
  break_time?: number;
  /**
   * The minimum difficulty that the world must be on for this entity to break doors.
   * @default hard
   */
  min_difficulty?: Difficulty;
};
