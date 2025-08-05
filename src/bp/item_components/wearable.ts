// auto generated
import { WearableSlot } from "../../shared/slot.js";

/**
 * Makes an item wearable.
 */
export type ItemWearableComponent = {
  /**
   * Determines whether the Player's location is hidden on Locator Maps and the Locator Bar when the wearable item is worn. Default is false.
   */
  hides_player_location?: boolean;
  /**
   * How much protection does the wearable item have.
   */
  protection?: number;
  slot?: WearableSlot;
};
