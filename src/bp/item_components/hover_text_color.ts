/**
 * Determines the color of the item name when hovering over it.
 */
export type ItemHoverTextColorComponent =
  | {
      /**
       * The color of the item hover text.
       */
      value?:
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
        | "minecoin_gold";
    }
  | (
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
    );
