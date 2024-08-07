import { ItemIdentifier } from "../../shared/item_identifier.js";

/**
 * Allows the mob to pick up items on the ground.
 */
export type EntityBehaviorPickupItemsComponent = {
  priority?: number;
  /**
   * Maximum distance this mob will look for items to pick up.
   */
  max_dist?: number;
  /**
   * Distance in blocks within the mob considers it has reached the goal. This is the 'wiggle room' to stop the AI from bouncing back and forth trying to reach a specific spot.
   * @default 0.5
   */
  goal_radius?: number;
  /**
   * Movement speed multiplier of the mob when using this AI Goal.
   * @default 1
   */
  speed_multiplier?: number;
  /**
   * If true, this mob will chase after the target as long as it's a valid target.
   */
  track_target?: boolean;
  /**
   * If true, depending on the difficulty, there is a random chance that the mob may not be able to pickup items.
   */
  pickup_based_on_chance?: boolean;
  /**
   * If true, the mob can pickup any item.
   */
  can_pickup_any_item?: boolean;
  /**
   * If true, the mob can pickup items to its hand or armor slots.
   * @default true
   */
  can_pickup_to_hand_or_equipment?: boolean;
  cooldown_after_being_attacked?: number;
  /**
   * List of items this mob will not pick up.
   */
  excluded_items?: Array<ItemIdentifier>;
  search_height?: number;
  pickup_same_items_as_in_hand?: boolean;
};
