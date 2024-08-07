/**
 * Allows this entity to attack a player by charging at them. The player is chosen by the 'minecraft:behavior.dragonscanning'. Can only be used by the Ender Dragon.
 */
export type EntityBehaviorDragonchargeplayerComponent = {
  priority?: number;
  /**
   * The speed this entity moves when this behavior has started or while it's active.
   * @default 1
   */
  active_speed?: number;
  /**
   * If the dragon is outside the 'target_zone' for longer than 'continue_charge_threshold_time' seconds, the charge is canceled.
   * @default 0.5
   */
  continue_charge_threshold_time?: number;
  /**
   * The speed this entity moves while this behavior is not active.
   * @default 0.6
   */
  flight_speed?: number;
  /**
   * Minimum and maximum distance, from the target, this entity can use this behavior.
   */
  target_zone?: {
    range_min?: number;
    range_max?: number;
  };
  /**
   * The speed at which this entity turns while using this behavior.
   * @default 0.7
   */
  turn_speed?: number;
};
