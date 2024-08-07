import {
  ItemAllowOffHandComponent,
  ItemBlockPlacerComponent,
  ItemCanDestroyInCreativeComponent,
  ItemCooldownComponent,
  ItemDamageComponent,
  ItemDisplayNameComponent,
  ItemDurabilityComponent,
  ItemEnchantableComponent,
  ItemEntityPlacerComponent,
  ItemFoodComponent,
  ItemFuelComponent,
  ItemGlintComponent,
  ItemHandEquippedComponent,
  ItemHoverTextColorComponent,
  ItemIconComponent,
  ItemInteractButtonComponent,
  ItemLiquidClippedComponent,
  ItemMaxStackSizeComponent,
  ItemProjectileComponent,
  ItemRecordComponent,
  ItemRepairableComponent,
  ItemShooterComponent,
  ItemShouldDespawnComponent,
  ItemStackedByDataComponent,
  ItemTagsComponent,
  ItemThrowableComponent,
  ItemUseAnimationComponent,
  ItemUseModifiersComponent,
  ItemWearableComponent,
} from "./item_components/index.js";

export type Item = {
  format_version: string;
  "minecraft:item": {
    description: {
      identifier: string;
      menu_category?: {
        category?: "commands" | "construction" | "equipment" | "items" | "nature" | "none";
        group?: ItemGroup;
        is_hidden_in_commands?: boolean;
      };
    };
    components?: ItemComponents;
  };
};

export type ItemGroup =
  | "itemGroup.name.anvil"
  | "itemGroup.name.arrow"
  | "itemGroup.name.axe"
  | "itemGroup.name.banner"
  | "itemGroup.name.banner_pattern"
  | "itemGroup.name.bed"
  | "itemGroup.name.boat"
  | "itemGroup.name.boots"
  | "itemGroup.name.buttons"
  | "itemGroup.name.candles"
  | "itemGroup.name.chalkboard"
  | "itemGroup.name.chemistrytable"
  | "itemGroup.name.chest"
  | "itemGroup.name.chestboat"
  | "itemGroup.name.chestplate"
  | "itemGroup.name.concrete"
  | "itemGroup.name.concretePowder"
  | "itemGroup.name.cookedFood"
  | "itemGroup.name.copper"
  | "itemGroup.name.coral"
  | "itemGroup.name.coral_decorations"
  | "itemGroup.name.crop"
  | "itemGroup.name.door"
  | "itemGroup.name.dye"
  | "itemGroup.name.element"
  | "itemGroup.name.enchantedBook"
  | "itemGroup.name.fence"
  | "itemGroup.name.fenceGate"
  | "itemGroup.name.firework"
  | "itemGroup.name.fireworkStars"
  | "itemGroup.name.flower"
  | "itemGroup.name.glass"
  | "itemGroup.name.glassPane"
  | "itemGroup.name.glazedTerracotta"
  | "itemGroup.name.goatHorn"
  | "itemGroup.name.grass"
  | "itemGroup.name.hanging_sign"
  | "itemGroup.name.helmet"
  | "itemGroup.name.hoe"
  | "itemGroup.name.horseArmor"
  | "itemGroup.name.leaves"
  | "itemGroup.name.leggings"
  | "itemGroup.name.lingeringPotion"
  | "itemGroup.name.log"
  | "itemGroup.name.minecart"
  | "itemGroup.name.miscFood"
  | "itemGroup.name.mobEgg"
  | "itemGroup.name.monsterStoneEgg"
  | "itemGroup.name.mushroom"
  | "itemGroup.name.netherWartBlock"
  | "itemGroup.name.ore"
  | "itemGroup.name.permission"
  | "itemGroup.name.pickaxe"
  | "itemGroup.name.planks"
  | "itemGroup.name.potion"
  | "itemGroup.name.potterySherds"
  | "itemGroup.name.pressurePlate"
  | "itemGroup.name.rail"
  | "itemGroup.name.rawFood"
  | "itemGroup.name.record"
  | "itemGroup.name.sandstone"
  | "itemGroup.name.sapling"
  | "itemGroup.name.sculk"
  | "itemGroup.name.seed"
  | "itemGroup.name.shovel"
  | "itemGroup.name.shulkerBox"
  | "itemGroup.name.sign"
  | "itemGroup.name.skull"
  | "itemGroup.name.slab"
  | "itemGroup.name.smithing_templates"
  | "itemGroup.name.splashPotion"
  | "itemGroup.name.stainedClay"
  | "itemGroup.name.stairs"
  | "itemGroup.name.stone"
  | "itemGroup.name.stoneBrick"
  | "itemGroup.name.sword"
  | "itemGroup.name.trapdoor"
  | "itemGroup.name.walls"
  | "itemGroup.name.wood"
  | "itemGroup.name.wool"
  | "itemGroup.name.woolCarpet";

export type ItemComponents = {
  /**
   * Determine whether an item can be placed in the off-hand slot of the inventory.
   */
  "minecraft:allow_off_hand"?: ItemAllowOffHandComponent;
  /**
   * Block Placer item component. Items with this component will place a block when used. Experimental toggles required: Holiday Creator Features (in format versions before 1.20.10).
   */
  "minecraft:block_placer"?: ItemBlockPlacerComponent;
  /**
   * Determines if the item will break blocks in Creative Mode while swinging.
   */
  "minecraft:can_destroy_in_creative"?: ItemCanDestroyInCreativeComponent;
  /**
   * Cool down time for a component. After use, all items in a specified 'cool down category' become unusable for a determined amount of time defined in the component. In format versions before 1.20.10, this component requires the 'Holiday Creator Features' experimental toggle.
   */
  "minecraft:cooldown"?: ItemCooldownComponent;
  /**
   * Determines how much extra damage the item does on attack.
   */
  "minecraft:damage"?: ItemDamageComponent;
  /**
   * Defines the text shown when an item name is shown, such as hover text. In format versions prior to 1.20.0, this component requires the 'Holiday Creator Features' experimental toggle.
   */
  "minecraft:display_name"?: ItemDisplayNameComponent;
  /**
   * Determines how much damage the item can take before breaking, and allows the item to be combined in crafting. In format versions prior to 1.20.0, this component requires the 'Holiday Creator Features' experimental toggle.
   */
  "minecraft:durability"?: ItemDurabilityComponent;
  /**
   * Determines what enchantments can be applied to the item. Not all enchantments will have an effect on all item components.
   */
  "minecraft:enchantable"?: ItemEnchantableComponent;
  /**
   * Allows the item to place specified entities into the world. In format versions prior to 1.20.0, this component requires the 'Holiday Creator Features' experimental toggle.
   */
  "minecraft:entity_placer"?: ItemEntityPlacerComponent;
  /**
   * When an item has a food component, it becomes edible to the player. Must have the minecraft:use_modifiers component in order to function properly.
   */
  "minecraft:food"?: ItemFoodComponent;
  /**
   * Allows the item to be used as fuel in a furnace to 'cook' other items. In format versions prior to 1.20.0, this component requires the 'Holiday Creator Features' experimental toggle.
   */
  "minecraft:fuel"?: ItemFuelComponent;
  /**
   * Determines whether the item has the enchanted glint render effect on it.
   */
  "minecraft:glint"?: ItemGlintComponent;
  /**
   * Determines if an item is rendered like a tool while in hand.
   */
  "minecraft:hand_equipped"?: ItemHandEquippedComponent;
  /**
   * Determines the color of the item name when hovering over it.
   */
  "minecraft:hover_text_color"?: ItemHoverTextColorComponent;
  /**
   * Determines the icon to represent the item in the UI and elsewhere. In format versions before 1.20.10, this component requires the 'Holiday Creator Features' experimental toggle.
   */
  "minecraft:icon"?: ItemIconComponent;
  /**
   * This component is a boolean or string that determines if the interact button is shown in touch controls and what text is displayed on the button. When set to 'true', default 'Use Item' text will be used.
   */
  "minecraft:interact_button"?: ItemInteractButtonComponent;
  /**
   * Determines whether an item interacts with liquid blocks on use.
   */
  "minecraft:liquid_clipped"?: ItemLiquidClippedComponent;
  /**
   * Determines how many of the item can be stacked.
   */
  "minecraft:max_stack_size"?: ItemMaxStackSizeComponent;
  /**
   * Projectile item component. Projectile items shoot out, like an arrow. In format versions prior to 1.20.10, this component requires the 'Holiday Creator Features' experimental toggle.
   */
  "minecraft:projectile"?: ItemProjectileComponent;
  /**
   * The record item component allows the item to play a sound when used in a jukebox.
   */
  "minecraft:record"?: ItemRecordComponent;
  /**
   * Repairable item component: Determines which items can be used to repair a defined item, as well as the amount of durability specified items will repair. In format versions prior to 1.20.10, this component requires the 'Holiday Creator Features' experimental toggle.
   */
  "minecraft:repairable"?: ItemRepairableComponent;
  /**
   * Shooter Item Component. Must have the minecraft:use_modifiers component in order to function properly. In format versions prior to 1.20.10, this component requires the 'Holiday Creator Features' experimental toggle.
   */
  "minecraft:shooter"?: ItemShooterComponent;
  /**
   * Determines whether an item should eventually despawn while floating in the world.
   */
  "minecraft:should_despawn"?: ItemShouldDespawnComponent;
  /**
   * Determines if the same item with different aux values can stack. Additionally, defines whether the item actors can merge while floating in the world.
   */
  "minecraft:stacked_by_data"?: ItemStackedByDataComponent;
  /**
   * The tags component determines which tags are attached to an item.
   */
  "minecraft:tags"?: ItemTagsComponent;
  /**
   * Throwable item component. Throwable items, such as a snowball. In format versions prior to 1.20.10, this component requires the 'Holiday Creator Features' experimental toggle.
   */
  "minecraft:throwable"?: ItemThrowableComponent;
  /**
   * Determines which animation plays when using an item.
   */
  "minecraft:use_animation"?: ItemUseAnimationComponent;
  /**
   * Modifies use effects, including how long an item takes to use and the player's speed when used in combination with components like Shooter, Throwable or Food.
   */
  "minecraft:use_modifiers"?: ItemUseModifiersComponent;
  /**
   * Determines where the item can be worn. If any non-hand slot is chosen, the max stack size is set to 1. Experimental toggles required: Holiday Creator Features.
   */
  "minecraft:wearable"?: ItemWearableComponent;
};
