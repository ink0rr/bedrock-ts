// auto generated
/**
 * Allows the entity to move in random directions like a slime.
 */
export type EntityBehaviorSlimeRandomDirectionComponent = {
  priority?: number;
  /**
   * Additional time (in whole seconds), chosen randomly in the range of [0, 'add_random_time_range'], to add to 'min_change_direction_time'.
   * @default 3
   */
  add_random_time_range?: number;
  /**
   * Maximum rotation angle range (in degrees) when randomly choosing a new direction.
   * @default 360
   */
  turn_range?: number;
  /**
   * Constant minimum time (in seconds) to wait before choosing a new direction.
   * @default 2
   */
  min_change_direction_time?: number;
};
