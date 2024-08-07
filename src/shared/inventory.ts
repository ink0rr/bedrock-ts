import { LiteralUnion } from "./literal_union.js";

export type Inventory = LiteralUnion<
  | "minecart_chest"
  | "horse"
  | "minecart_hopper"
  | "container"
  | "inventory"
  | "hopper"
  | "chest_boat"
>;
