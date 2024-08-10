// auto generated
/**
 * Allows this entity to use a flame-breath attack. Can only be used by the Ender Dragon.
 */
export type EntityBehaviorDragonflamingComponent = {
  priority?: number;
  /**
   * Time (in seconds), after roar, to breath flame.
   * @default 10
   */
  cooldown_time?: number;
  /**
   * Time (in seconds), after roar, to breath flame.
   * @default 0.5
   */
  flame_time?: number;
  /**
   * Number of ground flame-breath attacks to use before flight-takeoff.
   * @default 4
   */
  ground_flame_count?: number;
  /**
   * Time (in seconds) to roar, before breathing flame.
   * @default 2
   */
  roar_time?: number;
};
