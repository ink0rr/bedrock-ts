/**
 * Used to differentiate the component group of a variant of an entity from others. (e.g. ocelot, villager)
 */
export type EntityVariantComponent = {
  /**
   * The ID of the variant. By convention, 0 is the ID of the base entity.
   */
  value?: number;
};
