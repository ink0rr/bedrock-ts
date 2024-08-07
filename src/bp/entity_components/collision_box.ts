/**
 * Sets the width and height of the Entity's collision box.
 */
export type EntityCollisionBoxComponent = {
  /**
   * Width and Depth of the collision box in blocks. A negative value will be assumed to be 0.
   * @default 1
   */
  width?: number;
  /**
   * Height of the collision box in blocks. A negative value will be assumed to be 0.
   * @default 1
   */
  height?: number;
};
