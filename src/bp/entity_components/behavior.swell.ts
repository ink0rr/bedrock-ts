/**
 * Allows the creeper to swell up when a player is nearby. It can only be used by Creepers.
 */
export type EntityBehaviorSwellComponent = {
  priority?: number;
  /**
   * This mob starts swelling when a target is at least this many blocks away.
   * @default 10
   */
  start_distance?: number;
  /**
   * This mob stops swelling when a target has moved away at least this many blocks.
   * @default 2
   */
  stop_distance?: number;
};
