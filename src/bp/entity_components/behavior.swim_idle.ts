// auto generated
/**
 * Allows the entity go idle, if swimming. Entity must be in water.
 */
export type EntityBehaviorSwimIdleComponent = {
  priority?: number;
  /**
   * Amount of time (in seconds) to stay idle.
   * @default 5
   */
  idle_time?: number;
  /**
   * Percent chance this entity will go idle, 1.0 = 100%.
   * @default 0.1
   */
  success_rate?: number;
};
