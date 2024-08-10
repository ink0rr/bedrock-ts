/**
 * Determines what enchantments can be applied to the item. Not all enchantments will have an effect on all item components.
 */
export type ItemEnchantableComponent = {
  /**
   * What enchantments can be applied.
   */
  slot?:
    | "armor_feet"
    | "armor_torso"
    | "armor_head"
    | "armor_legs"
    | "axe"
    | "bow"
    | "cosmetic_head"
    | "crossbow"
    | "elytra"
    | "fishing_rod"
    | "flintsteel"
    | "hoe"
    | "pickaxe"
    | "shears"
    | "shield"
    | "shovel"
    | "sword"
    | "all";
  value?: number;
};
