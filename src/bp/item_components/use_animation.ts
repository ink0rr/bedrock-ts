/**
 * Determines which animation plays when using an item.
 */
export type ItemUseAnimationComponent =
  | {
      /**
       * Which animation to play when using an item.
       */
      value?:
        | "block"
        | "bow"
        | "brush"
        | "camera"
        | "crossbow"
        | "eat"
        | "drink"
        | "none"
        | "spear"
        | "spyglass";
    }
  | (
      | "block"
      | "bow"
      | "brush"
      | "camera"
      | "crossbow"
      | "eat"
      | "drink"
      | "none"
      | "spear"
      | "spyglass"
    );
