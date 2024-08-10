// auto generated
/**
 * Allows the entity to wander around while swimming, when not path-finding.
 */
export type EntityBehaviorSwimWanderComponent = {
  priority?: number;
  /**
   * This multiplier modifies the entity's speed when wandering.
   * @default 1
   */
  speed_multiplier?: number;
  /**
   * Percent chance to start wandering, when not path-finding. 1 = 100%.
   * @default 0.00833
   */
  interval?: number;
  /**
   * Distance to look ahead for obstacle avoidance, while wandering.
   * @default 5
   */
  look_ahead?: number;
  /**
   * Amount of time (in seconds) to wander after wandering behavior was successfully started.
   * @default 5
   */
  wander_time?: number;
};
