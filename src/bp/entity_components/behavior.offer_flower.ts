import { Filter } from "../../shared/filter.js";

/**
 * Allows the mob to offer a flower to another mob with the minecraft:take_flower behavior.
 */
export type EntityBehaviorOfferFlowerComponent = {
  priority?: number;
  /**
   * Percent chance that the mob will start this goal from 0.0 to 1.0 (where 1.0 = 100%).
   */
  chance_to_start?: number;
  /**
   * Conditions that need to be met for the behavior to start.
   */
  filters?: Filter;
  /**
   * Maximum rotation (in degrees), on the Y-axis, this entity can rotate its head while trying to look at the target.
   * @default 30
   */
  max_head_rotation_y?: number;
  /**
   * The max amount of time (in seconds) that the mob will offer the flower for before exiting the Goal.
   * @default 20
   */
  max_offer_flower_duration?: number;
  /**
   * Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target.
   * @default 30
   */
  max_rotation_x?: number;
  /**
   * The dimensions of the AABB used to search for a potential mob to offer flower to.
   */
  search_area?: [number, number, number];
};
