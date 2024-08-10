// auto generated
import { ContainerType } from "../../shared/container_type.js";

/**
 * Defines this entity's inventory properties.
 */
export type EntityInventoryComponent = {
  /**
   * Number of slots that this entity can gain per extra strength.
   */
  additional_slots_per_strength?: number;
  /**
   * If true, the contents of this inventory can be removed by a hopper.
   */
  can_be_siphoned_from?: boolean;
  /**
   * Type of container this entity has. Can be horse, minecart_chest, minecart_hopper, inventory, container or hopper.
   */
  container_type?: ContainerType;
  /**
   * Number of slots the container has.
   * @default 5
   */
  inventory_size?: number;
  /**
   * If true, the entity will not drop it's inventory on death.
   */
  private?: boolean;
  /**
   * If true, the entity's inventory can only be accessed by its owner or itself.
   */
  restrict_to_owner?: boolean;
  /**
   * The entity's equipment slot to equip the item to, if any, upon successful interaction.
   * @default -1
   */
  equip_item_slot?: number;
};
