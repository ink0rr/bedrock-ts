// auto generated
/**
 * Causes the entity to grow tired every once in a while, while attacking.
 */
export type EntityBehaviorSlimeAttackComponent = {
  priority?: number;
  /**
   * Allows the actor to be set to persist upon targeting a player.
   */
  set_persistent?: boolean;
  /**
   * During attack behavior, this multiplier modifies the entity's speed when moving toward the target.
   * @default 1
   */
  speed_multiplier?: number;
  /**
   * Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target.
   * @default 10
   */
  x_max_rotation?: number;
  /**
   * Maximum rotation (in degrees), on the Y-axis, this entity can rotate while trying to look at the target.
   * @default 10
   */
  y_max_rotation?: number;
};
