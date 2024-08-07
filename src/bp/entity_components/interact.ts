import { ActionText } from "../../shared/action_text.js";
import { EntityIdentifier } from "../../shared/entity_identifier.js";
import { EventTriggerFiltered } from "../../shared/event_trigger.js";
import { ItemIdentifier } from "../../shared/item_identifier.js";
import { LootTable } from "../../shared/loot_table.js";
import { SoundEvent } from "../../shared/sound_event.js";
import { EntityBehaviorParticleDefinition } from "../entity_behavior/particle.js";

export type Interaction = {
  /**
   * Loot table with items to add to the player's inventory upon successful interaction.
   */
  add_items?: {
    /**
     * File path, relative to the Behavior Pack's path, to the loot table file.
     */
    table?: LootTable;
  };
  /**
   * Time in seconds before this entity can be interacted with again.
   */
  cooldown?: number;
  /**
   * Time in seconds before this entity can be interacted with after being attacked.
   */
  cooldown_after_being_attacked?: number;
  /**
   * The entity's slot to remove and drop the item from, if any, upon successful interaction. Inventory slots are denoted by positive numbers. Armor slots are denoted by 'slot.armor.head', 'slot.armor.chest', 'slot.armor.legs' and 'slot.armor.feet'.
   */
  drop_item_slot?:
    | "slot.armor.head"
    | "slot.armor.chest"
    | "slot.armor.legs"
    | "slot.armor.feet"
    | number;
  /**
   * The entity's equipment slot to equip the item to, if any, upon successful interaction.
   */
  equip_item_slot?:
    | "slot.armor.head"
    | "slot.armor.chest"
    | "slot.armor.legs"
    | "slot.armor.feet"
    | number;
  /**
   * Allows to repair one of the entity's items.
   */
  repair_entity_item?: {
    amount?: number;
    slot?: "slot.armor.head" | "slot.armor.chest" | "slot.armor.legs" | "slot.armor.feet" | number;
  };
  /**
   * The amount of damage the item will take when used to interact with this entity. A value of 0 means the item won't lose durability.
   */
  hurt_item?: number;
  /**
   * Text to show when the player is able to interact in this way with this entity when playing with Touch-screen controls.
   */
  interact_text?: ActionText;
  /**
   * Event to fire when the interaction occurs.
   */
  on_interact?: EventTriggerFiltered;
  /**
   * Particle effect that will be triggered at the start of the interaction.
   */
  particle_on_start?: EntityBehaviorParticleDefinition;
  /**
   * List of sounds to play when the interaction occurs.
   */
  play_sounds?: SoundEvent | Array<SoundEvent>;
  /**
   * List of entities to spawn when the interaction occurs.
   */
  spawn_entities?: Array<EntityIdentifier>;
  /**
   * Loot table with items to drop on the ground upon successful interaction.
   */
  spawn_items?: {
    table?: LootTable;
  };
  /**
   * If true, the player will do the 'swing' animation when interacting with this entity.
   */
  swing?: boolean;
  /**
   * The item used will transform to this item upon successful interaction.
   */
  transform_to_item?: ItemIdentifier;
  barter?: boolean;
  admire?: boolean;
  /**
   * If true, the interaction will use an item.
   */
  use_item?: boolean;
  /**
   * The amount of health this entity will recover or hurt when interacting with this item. Negative values will harm the entity.
   */
  health_amount?: number;
  /**
   * Whether it is possible to give items to an entity's main hand slot.
   */
  give_item?: boolean;
  /**
   * Whether it is possible to take items from an entity's main hand slot.
   */
  take_item?: boolean;
  /**
   * Vibration to emit when the interaction occurs. Admitted values are entity_interact (used by default), shear, and none (no vibration emitted).
   * @default entity_interact
   */
  vibration?: "entity_interact" | "entity_act" | "shear" | "none";
};
/**
 * Defines interactions with this entity.
 */
export type EntityInteractComponent = {
  interactions?: Array<Interaction> | Interaction;
};
