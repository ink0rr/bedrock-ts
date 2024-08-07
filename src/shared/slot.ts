import { LiteralUnion } from "./literal_union.js";

export type Slot = LiteralUnion<
  | "slot.armor"
  | "slot.armor.body"
  | "slot.armor.chest"
  | "slot.armor.feet"
  | "slot.armor.head"
  | "slot.armor.legs"
  | "slot.chest"
  | "slot.enderchest"
  | "slot.hotbar"
  | "slot.inventory"
  | "slot.saddle"
  | "slot.weapon.mainhand"
  | "slot.weapon.offhand"
  | "slot.equippable"
>;
