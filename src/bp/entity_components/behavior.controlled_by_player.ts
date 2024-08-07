/**
 * Allows the entity to be controlled by the player using an item in the item_controllable property (required). Also requires the minecraft:movement property, and the minecraft:rideable property. On every tick, the entity will attempt to rotate towards where the player is facing with the control item whilst simultaneously moving forward.
 */
export type EntityBehaviorControlledByPlayerComponent = {
  priority?: number;
  /**
   * Speed multiplier for the mount when it is being controlled by a player.
   * @default 1
   */
  mount_speed_multiplier?: number;
  /**
   * Limits the total degrees the entity can rotate to face where the player is facing on each tick.
   * @default 5
   */
  fractional_rotation_limit?: number;
  /**
   * The entity will attempt to rotate to face where the player is facing each tick. The entity will target this percentage of their difference in their current facing angles each tick (from 0.0 to 1.0 where 1.0 = 100%). This is limited by FractionalRotationLimit. A value of 0.0 will result in the entity no longer turning to where the player is facing.
   * @default 0.5
   */
  fractional_rotation?: number;
};
