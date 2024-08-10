// auto generated
export type EntityBehaviorSwimUpForBreathComponent = {
  priority?: number;
  /**
   * The material the mob is traveling in. An air block will only be considered valid to move to with a block of this material below it.
   */
  material_type?: "water" | "lava" | "any";
  /**
   * The height (in blocks) above the mob's current position that it will search for a valid air block to move to. If a valid block cannot be found, the mob will move to the position this many blocks above it.
   */
  search_height?: number;
  /**
   * The radius (in blocks) around the mob's current position that it will search for a valid air block to move to.
   */
  search_radius?: number;
  /**
   * Movement speed multiplier of the mob when using this Goal.
   */
  speed_mod?: number;
};
