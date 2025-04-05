// auto generated
import { Filters } from "../../shared/filter.js";

/**
 * Allows mobs to occassionally stop and take a nap under certain conditions.
 */
export type EntityBehaviorNapComponent = {
  priority?: number;
  /**
   * Maximum time in seconds the mob has to wait before using the goal again.
   */
  cooldown_min?: number;
  /**
   * Maximum time in seconds the mob has to wait before using the goal again.
   */
  cooldown_max?: number;
  /**
   * The block distance in x and z that will be checked for mobs that this mob detects.
   * @default 6
   */
  mob_detect_dist?: number;
  /**
   * The block distance in y that will be checked for mobs that this mob detects.
   * @default 6
   */
  mob_detect_height?: number;
  can_nap_filters?: Filters;
  wake_mob_exceptions?: Filters;
};
