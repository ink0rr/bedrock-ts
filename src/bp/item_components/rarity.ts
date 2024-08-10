// auto generated
export namespace ItemRarityComponent {
  export type RarityEnum = "common" | "uncommon" | "rare" | "epic";
}
/**
 * Specifies the base rarity and subsequently color of the item name when the player hovers the cursor over the item.
 */
export type ItemRarityComponent =
  | ItemRarityComponent.RarityEnum
  | {
      /**
       * Sets the base rarity of the item. The rarity of an item automatically increases when enchanted, either to Rare when the base rarity is Common or Uncommon, or Epic when the base rarity is Rare.
       */
      value?: ItemRarityComponent.RarityEnum;
    };
