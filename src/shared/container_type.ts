import { LiteralUnion } from "./literal_union.js";

export type ContainerType = LiteralUnion<
  | "minecart_chest"
  | "horse"
  | "minecart_hopper"
  | "container"
  | "inventory"
  | "hopper"
  | "chest_boat"
>;
