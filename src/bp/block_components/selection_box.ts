/**
 * Defines the area of the block that is selected by the player's cursor. If set to true, default values are used. If set to false, this block is not selectable by the player's cursor. If this component is omitted, default values are used.
 */
export type BlockSelectionBoxComponent =
  | {
      /**
       * Size of each side of the selection box. Size is specified as [x, y, z]. 'origin' + 'size' must be in the range (-8, 0, -8) to (8, 16, 8), inclusive.
       */
      size?: [number, number, number];
      /**
       * Minimal position of the bounds of the selection box. 'origin' is specified as [x, y, z] and must be in the range (-8, 0, -8) to (8, 16, 8), inclusive.
       */
      origin?: [number, number, number];
    }
  | boolean;
