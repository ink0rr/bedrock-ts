import { ItemIdentifier } from "../../shared/literals/item_identifier.js";

/**
 * Shooter Item Component. Must have the minecraft:use_modifiers component in order to function properly. In format versions prior to 1.20.10, this component requires the 'Holiday Creator Features' experimental toggle.
 */
export type ItemShooterComponent = {
  /**
   * Sets the entity that is used as ammunition
   */
  ammunition?: Array<{
    /**
     * Denotes the item description identifier
     */
    item?: ItemIdentifier;
    /**
     * When set to 'true', ammunition can be used from the offhand
     */
    use_offhand?: boolean;
    /**
     * Determines whether the inventory can be searched for ammunition to use
     */
    search_inventory?: boolean;
    /**
     * Determines whether the ammunition can be used in Creative mode
     */
    use_in_creative?: boolean;
  }>;
  /**
   * Sets if the item is charged when drawn
   */
  charge_on_draw?: boolean;
  /**
   * Launch power scale. Default is set to 1.0.
   */
  launch_power_scale?: number;
  /**
   * Determines how long can the weapon can be drawn before releasing automatically
   */
  max_draw_duration?: number;
  /**
   * Launch power. Default is set to 1.0.
   */
  max_launch_power?: number;
  /**
   * When set to 'true', the longer the weapon is drawn, the more power it will have when released
   */
  scale_power_by_draw_duration?: boolean;
};
