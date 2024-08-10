/**
 * Sets the projectile used by minecraft:shooter and minecraft:throwable.
 */
export type ItemProjectileComponent = {
  /**
   * The entity to use as the projectile for this item when it is used as ammunition.
   */
  projectile_entity?: string;
  minimum_critical_power?: number;
};
