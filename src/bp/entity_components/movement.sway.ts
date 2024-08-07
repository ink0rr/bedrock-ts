/**
 * This move control causes the mob to sway side to side giving the impression it is swimming.
 */
export type EntityMovementSwayComponent = {
  /**
   * The maximum number in degrees the mob can turn per tick.
   * @default 30
   */
  max_turn?: number;
  /**
   * Strength of the sway movement.
   * @default 0.05
   */
  sway_amplitude?: number;
  /**
   * Multiplier for the frequency of the sway movement.
   * @default 0.5
   */
  sway_frequency?: number;
};
