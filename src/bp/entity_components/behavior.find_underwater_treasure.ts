// auto generated
/**
 * Allows the mob to move towards the nearest underwater ruin or shipwreck.
 */
export type EntityBehaviorFindUnderwaterTreasureComponent = {
  priority?: number;
  /**
   * The range that the mob will search for a treasure chest within a ruin or shipwreck to move towards.
   */
  search_range?: number;
  /**
   * The distance the mob will move before stopping.
   * @default 2
   */
  stop_distance?: number;
  /**
   * Movement speed multiplier of the mob when using this AI Goal.
   * @default 1
   */
  speed_multiplier?: number;
};
