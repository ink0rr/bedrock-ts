// auto generated
/**
 * Allow slimes to float in water / lava. Can only be used by Slime and Magma Cubes.
 */
export type EntityBehaviorSlimeFloatComponent = {
  priority?: number;
  /**
   * Percent chance a slime or magma cube has to jump while in water / lava.
   * @default 0.8
   */
  jump_chance_percentage?: number;
  /**
   * Determines the multiplier the entity's speed is modified by when moving through water / lava.
   * @default 1.2
   */
  speed_multiplier?: number;
};
