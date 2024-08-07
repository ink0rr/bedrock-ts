/**
 * Cool down time for a component. After use, all items in a specified 'cool down category' become unusable for a determined amount of time defined in the component. In format versions before 1.20.10, this component requires the 'Holiday Creator Features' experimental toggle.
 */
export type ItemCooldownComponent = {
  /**
   * The type of cool down for this item.
   */
  category?: string;
  /**
   * The duration of time (in seconds) items with a matching category will spend cooling down before becoming usable again.
   */
  duration?: number;
};
