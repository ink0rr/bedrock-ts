export type ItemShooterComponent = {
  /**
   * Draw Duration. Default is set to 0.
   */
  max_draw_duration?: number;
  /**
   * Charge on draw? Default is set to false.
   */
  charge_on_draw?: boolean;
  /**
   * Scale power by draw duration? Default is set to false.
   */
  scale_power_by_draw_duration?: boolean;
  /**
   * Launch power scale. Default is set to 1.0.
   */
  launch_power_scale?: number;
  /**
   * Launch power. Default is set to 1.0.
   */
  max_launch_power?: number;
  /**
   * Define the ammunition item to use.
   */
  ammunition?: Array<{
    item?: string;
    /**
     * Whether ammunition can be taken from the offhand.
     */
    use_offhand?: boolean;
    /**
     * Whether the whole inventory should be searched for the ammunition.
     */
    search_inventory?: boolean;
    /**
     * Whether this ammunition can be used in creative mode.
     */
    use_in_creative?: boolean;
  }>;
};
