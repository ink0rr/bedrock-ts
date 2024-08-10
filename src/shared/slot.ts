import { LiteralUnion } from "./literal_union.js";

export type WearableSlot = LiteralUnion<
  | "slot.armor"
  | "slot.armor.body"
  | "slot.armor.chest"
  | "slot.armor.feet"
  | "slot.armor.head"
  | "slot.armor.legs"
  | "slot.weapon.offhand"
>;

export type Slot = LiteralUnion<
  | "slot.chest"
  | "slot.enderchest"
  | "slot.hotbar"
  | "slot.inventory"
  | "slot.saddle"
  | "slot.weapon.mainhand"
  | "slot.equippable"
  | WearableSlot
>;
