/**
 * This move control causes the mob to fly.
 */
export type EntityMovementFlyComponent = {
  /**
   * The maximum number in degrees the mob can turn per tick.
   * @default 30
   */
  max_turn?: number;
};
