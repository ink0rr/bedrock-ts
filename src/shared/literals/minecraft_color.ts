import { LiteralUnion } from "../literal_union.js";

export type MinecraftColor = LiteralUnion<
  | "dark_red"
  | "red"
  | "gold"
  | "yellow"
  | "dark_green"
  | "green"
  | "aqua"
  | "dark_aqua"
  | "dark_blue"
  | "blue"
  | "light_purple"
  | "dark_purple"
  | "white"
  | "gray"
  | "dark_gray"
  | "black"
  | "minecoin_gold"
>;
