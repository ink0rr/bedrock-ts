/**
 * Defines how the entity explodes.
 */
export type EntityExplodeComponent = {
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
};
