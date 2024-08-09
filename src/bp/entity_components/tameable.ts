import { EventTrigger } from "../../shared/event_trigger.js";
import { ItemIdentifier } from "../../shared/literals/item_identifier.js";

/**
 * Defines the rules for a mob to be tamed by the player.
 */
export type EntityTameableComponent = {
  /**
   * The chance of taming the entity with each item use between 0.0 and 1.0, where 1.0 is 100%.
   * @default 1
   */
  probability?: number;
  /**
   * The list of items that can be used to tame this entity.
   */
  tame_items?: Array<ItemIdentifier> | ItemIdentifier;
  /**
   * Event to run when this entity becomes tamed.
   */
  tame_event?: EventTrigger;
};
