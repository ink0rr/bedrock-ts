// auto generated
import { EntityEventTrigger } from "../entity_behavior/event.js";

/**
 * Defines the ravager's response to their melee attack being blocked.
 */
export type EntityRavagerBlockedComponent = {
  /**
   * The strength with which blocking entities should be knocked back.
   * @default 3
   */
  knockback_strength?: number;
  /**
   * A list of weighted responses to the melee attack being blocked.
   */
  reaction_choices?: Array<{
    weight?: number;
    value?: EntityEventTrigger;
  }>;
};
