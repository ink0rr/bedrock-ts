/**
 * Cool down time for a component. After you use an item it becomes unusable for the duration specified by the 'cool down time' setting in this component.
 */
export type ItemCooldownComponent = {
  /**
   * The type of cool down for this item.
   */
  category?: string;
  /**
   * The duration of time this item will spend cooling down before becoming usable again.
   */
  duration?: number;
};
