/**
 * Allows an entity to emit `entityMove`, `swim` and `flap` game events, depending on the block the entity is moving through. It is added by default to every mob. Add it again to override its behavior.
 */
export type EntityGameEventMovementTrackingComponent = {
  /**
   * If true, the `flap` game event will be emitted when the entity moves through air.
   */
  emit_flap?: boolean;
  /**
   * If true, the `entityMove` game event will be emitted when the entity moves on ground or through a solid.
   * @default true
   */
  emit_move?: boolean;
  /**
   * If true, the `swim` game event will be emitted when the entity moves through a liquid.
   * @default true
   */
  emit_swim?: boolean;
};
