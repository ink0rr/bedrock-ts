/**
 * Allows mobs to lay down at times.
 */
export type EntityBehaviorLayDownComponent = {
  priority?: number;
  /**
   * A random value to determine at what intervals something can occur. This has a 1/interval chance to choose this goal.
   * @default 120
   */
  interval?: number;
  /**
   * A random value in which the goal can use to pull out of the behavior. This is a 1/interval chance to play the sound.
   * @default 120
   */
  random_stop_interval?: number;
};
