// auto generated
/**
 * Describes the component of a custom crafting table. This component supports only 'recipe_shaped' and 'recipe_shapeless' typed recipes and not others like 'recipe_furnace' or 'recipe_brewing_mix'. If there are two recipes for one item, the recipe book will pick the first that was parsed. If two input recipes are the same, crafting may assert and the resulting item may vary.
 */
export type BlockCraftingTableComponent = {
  /**
   * Defines the name in the UI of this table. If not specified, the name of the block will be used.
   */
  custom_description?: string;
  /**
   * Recipe grid size.
   */
  grid_size?: 3;
  /**
   * Defines the tags recipes should define to be crafted on this table.
   */
  crafting_tags?: Array<string>;
};
