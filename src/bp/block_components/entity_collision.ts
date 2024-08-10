/**
 * Describes the collision of the block with entities and actors. If set to false, it disables the collision of the block with entities. An origin of [-8.0, 0.0, -8.0] with a size of [16, 16, 16] is a unit cube.
 */
export type BlockEntityCollisionComponent =
  | {
      /**
       * Size of each side of the box of the component
       */
      size?: [number, number, number];
      /**
       * Minimal position bounds of the collision box
       */
      origin?: [number, number, number];
    }
  | false;
