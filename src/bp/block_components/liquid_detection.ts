// auto generated
/**
 * The definitions for how a block behaves when detecting liquid. Only one rule definition is allowed per liquid type - if multiple are specified, the first will be used and the rest will be ignored.
 */
export type BlockLiquidDetectionComponent = {
  detection_rules?: Array<{
    /**
     * Whether this block can contain the liquid. For example, if the liquid type is `water`, this means the block can be waterlogged.
     */
    can_contain_liquid?: boolean;
    /**
     * The type of liquid this detection rule is for.
     */
    liquid_type?: "water";
    /**
     * How the block reacts to flowing water.
     */
    on_liquid_touches?: "blocking" | "broken" | "popped" | "no_reaction";
    /**
     * When a block contains a liquid, controls the directions in which the liquid can't flow out from the block. Also controls the directions in which a block can stop liquid flowing into it if `no_reaction` is set for the `on_liquid_touches` field.
     */
    stops_liquid_flowing_from_direction?: Array<
      "up" | "down" | "north" | "south" | "east" | "west"
    >;
  }>;
};
