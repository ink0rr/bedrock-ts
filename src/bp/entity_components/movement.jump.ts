/**
 * Move control that causes the mob to jump as it moves with a specified delay between jumps.
 */
export type EntityMovementJumpComponent = {
  /**
   * The maximum number in degrees the mob can turn per tick.
   * @default 30
   */
  max_turn?: number;
  /**
   * Delay after landing when using the slime move control.
   */
  jump_delay?: Array<number>;
};
