import { Slot } from "../../shared/slot.js";

/**
 * Makes an item wearable.
 */
export type ItemWearableComponent = {
  slot?: Slot;
  dispensable?: boolean;
};
