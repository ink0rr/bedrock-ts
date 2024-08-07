/**
 * Determines where the item can be worn. If any non-hand slot is chosen, the max stack size is set to 1. Experimental toggles required: Holiday Creator Features.
 */
export type ItemWearableComponent = {
  /**
   * How much protection the wearable has.
   */
  protection?: number;
  /**
   * Determines where the item can be worn. If any non-hand slot is chosen, the max stack size is set to 1.
   */
  slot?:
    | "slot.armor"
    | "slot.armor.body"
    | "slot.armor.chest"
    | "slot.armor.feet"
    | "slot.armor.head"
    | "slot.armor.legs"
    | "slot.weapon.offhand";
  dispensable?: boolean;
};
