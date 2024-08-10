/**
 * Defines the area of the block that collides with entities. If set to true, default values are used. If set to false, the block's collision with entities is disabled. If this component is omitted, default values are used.
 */
export type BlockCollisionBoxComponent =
  | {
      /**
       * Size of each side of the collision box. Size is specified as [x, y, z]. 'origin' + 'size' must be in the range (-8, 0, -8) to (8, 16, 8), inclusive.
       */
      size?: [number, number, number];
      /**
       * Minimal position of the bounds of the collision box. 'origin' is specified as [x, y, z] and must be in the range (-8, 0, -8) to (8, 16, 8), inclusive.
       */
      origin?: [number, number, number];
    }
  | boolean;
