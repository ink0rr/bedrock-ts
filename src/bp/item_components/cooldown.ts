// auto generated
/**
 * Cool down time for a component. After using an item, it becomes unusable for the duration specified by the 'duration' setting of this component.
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
