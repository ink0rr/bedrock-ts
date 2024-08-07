/**
 * If the mob is carrying a food item, the mob will eat it and the effects will be applied to the mob.
 */
export type EntityBehaviorEatCarriedItemComponent = {
  priority?: number;
  /**
   * Time in seconds the mob should wait before eating the item.
   */
  delay_before_eating?: number;
};
