/**
 * This allows the mob to roll forward.
 */
export type EntityBehaviorRollComponent = {
  priority?: number;
  /**
   * The probability that the mob will use the goal.
   * @default 1
   */
  probability?: number;
};
