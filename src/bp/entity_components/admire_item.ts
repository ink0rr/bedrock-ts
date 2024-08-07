import { VanillaEntityEvent } from "../entity_behavior/event.js";

/**
 * Causes the mob to ignore attackable targets for a given duration.
 */
export type EntityAdmireItemComponent = {
  /**
   * Duration, in seconds, that the mob is pacified.
   * @default 10
   */
  duration?: number;
  /**
   * Duration, in seconds, for which mob won't admire items if it was hurt.
   */
  cooldown_after_being_attacked?: number;
  spawn_event?: VanillaEntityEvent;
};
