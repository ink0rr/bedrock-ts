/**
 * Determines what enchantments can be applied to the item. Not all enchantments will have an effect on all item components.
 */
export type ItemEnchantableComponent = {
  /**
   * What enchantments can be applied (ex. Using bow would allow this item to be enchanted as if it were a bow).
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
  /**
   * The value of the enchantment (minimum of 0).
   */
  value?: number;
};
