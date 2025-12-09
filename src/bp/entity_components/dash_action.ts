// auto generated
/**
 * Ability for a rideable entity to dash.
 */
export type EntityDashActionComponent = {
  /**
   * Whether the entity can dash underwater.
   */
  can_dash_underwater?: boolean;
  /**
   * The dash cooldown in seconds. Default value is 1.000000.
   */
  cooldown_time?: number;
  /**
   * Should the momentum be applied in the direction of the 'entity' or 'passenger'. When 'entity' is used the momentum is applied horizontally according to the direction the entity is looking, using only the entity's yaw. When 'passenger' is used the momentum will be applied in the direction the controlling passenger is looking, using the passenger's pitch and yaw.
   */
  direction?: "entity" | "passenger";
  /**
   * Horizontal momentum of the dash.
   */
  horizontal_momentum?: number;
  /**
   * Vertical momentum of the dash.
   */
  vertical_momentum?: number;
};
