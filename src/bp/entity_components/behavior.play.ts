// auto generated
import { Filter } from "../../shared/filter.js";

/**
 * Allows the mob to play with other mobs by chasing each other and moving around randomly.
 */
export type EntityBehaviorPlayComponent = {
  priority?: number;
  /**
   * Movement speed multiplier of the mob when using this AI Goal.
   * @default 1
   */
  speed_multiplier?: number;
  /**
   * Percent chance that the mob will start this goal, from 0 to 1.
   */
  chance_to_start?: number;
  /**
   * The distance (in blocks) that the mob tries to be in range of the friend it's following.
   * @default 2
   */
  follow_distance?: number;
  /**
   * The dimensions of the AABB used to search for a potential friend to play with.
   */
  friend_search_area?: [number, number, number];
  /**
   * The entity type(s) to consider when searching for a potential friend to play with.
   */
  friend_types?: {
    filters?: Filter | Array<Filter>;
  };
  /**
   * The max amount of seconds that the mob will play for before exiting the Goal.
   * @default 50
   */
  max_play_duration_seconds?: number;
  /**
   * The height (in blocks) that the mob will search within to find a random position position to move to. Must be at least 1.
   * @default 3
   */
  random_pos_search_height?: number;
  /**
   * The distance (in blocks) on ground that the mob will search within to find a random position to move to. Must be at least 1.
   * @default 16
   */
  random_pos_search_range?: number;
};
