import { Filter } from "../../shared/filter.js";

/**
 * Allows a mob to stalk a target, then once within range pounce onto a target, on success the target will be attacked dealing damage defined by the attack component. On failure, the mob will risk getting stuck.
 */
export type EntityBehaviorStalkAndPounceOnTargetComponent = {
  priority?: number;
  set_persistent?: boolean;
  /**
   * The movement speed in which you stalk your target.
   * @default 1.2
   */
  stalk_speed?: number;
  /**
   * The maximum distance away a target can be before the mob gives up on stalking.
   * @default 10
   */
  max_stalk_dist?: number;
  /**
   * The height in blocks the mob jumps when leaping at its target.
   * @default 0.9
   */
  leap_height?: number;
  /**
   * The distance in blocks the mob jumps in the direction of its target.
   * @default 0.8
   */
  leap_dist?: number;
  /**
   * The maximum distance away from the target in blocks to begin pouncing at the target.
   * @default 0.5
   */
  pounce_max_dist?: number;
  /**
   * The amount of time the mob will be interested before pouncing. This happens when the mob is within range of pouncing.
   * @default 2
   */
  interest_time?: number;
  /**
   * The amount of time the mob will be stuck if they fail and land on a block they can be stuck on.
   * @default 2
   */
  stuck_time?: number;
  /**
   * The max distance away from the target when landing from the pounce that will still result in damaging the target.
   * @default 2
   */
  strike_dist?: number;
  stuck_blocks?: Filter;
};
