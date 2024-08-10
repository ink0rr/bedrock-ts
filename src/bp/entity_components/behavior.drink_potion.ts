// auto generated
import { Filter } from "../../shared/filter.js";
import { PotionId } from "../../shared/potion_id.js";

/**
 * Allows the mob to drink potions based on specified environment conditions.
 */
export type EntityBehaviorDrinkPotionComponent = {
  priority?: number;
  /**
   * The movement speed modifier to apply to the entity while it is drinking a potion. A value of 0 represents no change in speed.
   * @default 1
   */
  speed_modifier?: number;
  /**
   * A list of potions that this entity can drink.
   */
  potions?: Array<{
    /**
     * The registry ID of the potion to use.
     */
    id?: PotionId;
    /**
     * The percent chance (from 0.0 to 1.0) of this potion being selected when searching for a potion to use.
     * @default 1
     */
    chance?: number;
    /**
     * The filters to use when determining if this potion can be selected.
     */
    filters?: Filter;
  }>;
};
