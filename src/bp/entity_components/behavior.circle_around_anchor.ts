// auto generated
/**
 * Causes an entity to circle around an anchor point placed near a point or target.
 */
export type EntityBehaviorCircleAroundAnchorComponent = {
  priority?: number;
  /**
   * Horizontal distance from the anchor point this entity must stay within upon a successful radius adjustment.
   */
  radius_range?: [number, number];
  /**
   * The number of blocks to increase the current movement radius by, upon successful 'radius_adjustment_chance'. If the current radius increases over the range maximum, the current radius will be set back to the range minimum and the entity will change between clockwise and counter-clockwise movement.
   * @default 1
   */
  radius_change?: number;
  /**
   * Percent chance to determine how often to increase the size of the current movement radius around the anchor point. 1 = 100%.
   * @default 0.004
   */
  radius_adjustment_chance?: number;
  /**
   * The number of blocks above the target that the next anchor point can be set. This value is used only when the entity is tracking a target.
   */
  height_above_target_range?: Array<number>;
  /**
   * Vertical distance from the anchor point this entity must stay within, upon a successful height adjustment.
   */
  height_offset_range?: Array<number>;
  /**
   * Percent chance to determine how often to increase or decrease the current height around the anchor point. 1 = 100%.
   * @default 0.002857
   */
  height_adjustment_chance?: number;
  /**
   * Maximum distance from the anchor-point in which this entity considers itself to have reached the anchor point. This is to prevent the entity from bouncing back and forth trying to reach a specific spot.
   * @default 0.5
   */
  goal_radius?: number;
  /**
   * Number of degrees to change this entity's facing by, when the entity selects its next anchor point.
   * @default 15
   */
  angle_change?: number;
  /**
   * Multiplies the speed at which this entity travels to its next desired position.
   * @default 1
   */
  speed_multiplier?: number;
};
