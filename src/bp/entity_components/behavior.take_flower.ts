import { Filter } from "../../shared/filter.js";

/**
 * Allows the mob to accept flowers from another mob with the minecraft:offer_flower behavior.
 */
export type EntityBehaviorTakeFlowerComponent = {
  priority?: number;
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
   * Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target.
   * @default 30
   */
  max_rotation_x?: number;
  /**
   * The maximum amount of time (in seconds) for the mob to randomly wait for before taking the flower.
   * @default 20
   */
  max_wait_time?: number;
  /**
   * Minimum distance (in blocks) for the entity to be considered having reached its target.
   * @default 2
   */
  min_distance_to_target?: number;
  /**
   * The minimum amount of time (in seconds) for the mob to randomly wait for before taking the flower.
   * @default 4
   */
  min_wait_time?: number;
  /**
   * The dimensions of the AABB used to search for a potential mob to take a flower from.
   */
  search_area?: [number, number, number];
  /**
   * Movement speed multiplier of the mob when using this AI Goal.
   * @default 0.5
   */
  speed_multiplier?: number;
};
