// auto generated
/**
 * Defines how the entity explodes.
 */
export type EntityExplodeComponent = {
  /**
   * If true, the explosion will affect blocks and entities underwater.
   */
  allow_underwater?: boolean;
  /**
   * A scale factor applied to the explosion's damage to entities. A value of 0 prevents the explosion from dealing any damage. Negatives values cause the explosion to heal entities instead.
   */
  damage_scaling?: number;
  /**
   * The range for the random amount of time the fuse will be lit before exploding, a negative value means the explosion will be immediate.
   */
  fuse_length?:
    | number
    | Array<number>
    | {
        range_min?: number;
        range_max?: number;
      };
  /**
   * The radius of the explosion in blocks and the amount of damage the explosion deals.
   * @default 3
   */
  power?: number;
  /**
   * A blocks explosion resistance will be capped at this value when an explosion occurs.
   * @default 3.4028
   */
  max_resistance?: number;
  /**
   * If true, the fuse is already lit when this component is added to the entity.
   */
  fuse_lit?: boolean;
  /**
   * If true, blocks in the explosion radius will be set on fire.
   */
  causes_fire?: boolean;
  /**
   * If true, the explosion will destroy blocks in the explosion radius.
   * @default true
   */
  breaks_blocks?: boolean;
  /**
   * If true, whether the explosion causes fire is affected by the mob griefing game rule.
   */
  fire_affected_by_griefing?: boolean;
  /**
   * If true, whether the explosion breaks blocks is affected by the mob griefing game rule.
   */
  destroy_affected_by_griefing?: boolean;
  allow_damage_underwater?: boolean;
  /**
   * If true, the explosion will toggle blocks in the explosion radius.
   */
  toggles_blocks?: boolean;
  /**
   * A scale factor applied to the knockback force caused by the explosion
   */
  knockback_scaling?: number;
  /**
   * The name of the particle effect to use. All other inputs will use the default explosion particles.
   */
  particle_effect?: "wind_burst" | "breeze_wind_burst";
  /**
   * The name of the sound effect played when the explosion triggers.
   */
  sound_effect?: string;
  /**
   * Defines whether the explosion should apply fall damage negation to Players above the point of collision.
   */
  negates_fall_damage?: boolean;
};
