/**
 * Allows the item to be used as fuel in a furnace to 'cook' other items. In format versions prior to 1.20.0, this component requires the 'Holiday Creator Features' experimental toggle.
 */
export type ItemFuelComponent = {
  /**
   * How long in seconds will this fuel cook items for. Minimum value: 0.05.
   */
  duration?: number;
};
