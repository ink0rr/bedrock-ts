/**
 * Allows the mob to rise to the liquid surface.
 */
export type EntityBehaviorRiseToLiquidLevelComponent = {
  priority?: number;
  /**
   * Target distance down from the liquid surface. i.e. Positive values move the target Y down.
   */
  liquid_y_offset?: number;
  /**
   * Movement up in Y per tick when below the liquid surface.
   */
  rise_delta?: number;
  /**
   * Movement down in Y per tick when above the liquid surface.
   */
  sink_delta?: number;
};
