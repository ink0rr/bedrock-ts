// auto generated
import { Filter } from "../../shared/filter.js";
import { EntityEventTrigger } from "../entity_behavior/event.js";

/**
 * Allows the mob to perform a damaging knockback that affects all nearby entities.
 */
export type EntityBehaviorKnockbackRoarComponent = {
  priority?: number;
  /**
   * The delay after which the knockback occurs (in seconds).
   * @default 0.5
   */
  attack_time?: number;
  /**
   * Time in seconds the mob has to wait before using the goal again.
   * @default 0.1
   */
  cooldown_time?: number;
  /**
   * The duration of the roar (in seconds).
   * @default 1
   */
  duration?: number;
  /**
   * The damage dealt by the knockback roar.
   * @default 6
   */
  knockback_damage?: number;
  /**
   * The strength of the horizontal knockback.
   * @default 1
   */
  knockback_horizontal_strength?: number;
  /**
   * The strength of the vertical knockback.
   * @default 1
   */
  knockback_vertical_strength?: number;

  /**
   * The radius (in blocks) of the knockback effect.
   * @default 4
   */
  knockback_range?: number;
  /**
   * The list of conditions another entity must meet to be a valid target to apply knockback to.
   */
  knockback_filters?: Filter;
  /**
   * The list of conditions another entity must meet to be a valid target to apply damage to.
   */
  damage_filters?: Filter;
  /**
   * Event that is triggered when the roar ends.
   */
  on_roar_end?: EntityEventTrigger;
  /**
   * The maximum height for vertical knockback.
   * @default 0.4
   */
  knockback_height_cap?: number;
};
