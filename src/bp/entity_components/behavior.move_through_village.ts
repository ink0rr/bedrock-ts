// auto generated
/**
 * Can only be used by Villagers. Allows the villagers to create paths around the village.
 */
export type EntityBehaviorMoveThroughVillageComponent = {
  priority?: number;
  /**
   * Movement speed multiplier of the mob when using this AI Goal.
   * @default 1
   */
  speed_multiplier?: number;
  /**
   * If true, the mob will only move through the village during night time.
   */
  only_at_night?: boolean;
};
