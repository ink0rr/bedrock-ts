// auto generated
/**
 * Allows a mob to randomly fly around.
 */
export type EntityBehaviorRandomFlyComponent = {
  priority?: number;
  /**
   * Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1.
   * @default 10
   */
  xz_dist?: number;
  /**
   * Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1.
   * @default 7
   */
  y_dist?: number;
  y_offset?: number;
  /**
   * Movement speed multiplier of the mob when using this AI Goal.
   */
  speed_multiplier?: number;
  /**
   * If true, the mob can stop flying and land on a tree instead of the ground.
   * @default true
   */
  can_land_on_trees?: boolean;
  avoid_damage_blocks?: boolean;
};
