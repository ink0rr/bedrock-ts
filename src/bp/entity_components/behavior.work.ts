import { EventTriggerFiltered } from "../../shared/event_trigger.js";

/**
 * Allows the NPC to use the POI.
 */
export type EntityBehaviorWorkComponent = {
  priority?: number;
  /**
   * Movement speed multiplier of the mob when using this AI Goal.
   * @default 0.5
   */
  speed_multiplier?: number;
  /**
   * The amount of ticks the goal will be on cooldown before it can be used again.
   */
  goal_cooldown?: number;
  /**
   * The min interval in which a sound will play.
   */
  sound_delay_min?: number;
  /**
   * The max interval in which a sound will play.
   */
  sound_delay_max?: number;
  /**
   * The amount of ticks the NPC will stay in their the work location.
   */
  active_time?: number;
  /**
   * If true, this entity can work when their jobsite POI is being rained on.
   */
  can_work_in_rain?: boolean;
  /**
   * If 'can_work_in_rain' is false, this is the maximum number of ticks left in the goal where rain will not interrupt the goal.
   * @default -1
   */
  work_in_rain_tolerance?: number;
  /**
   * Event to run when the mob reaches their jobsite and finishes working.
   */
  on_arrival?: EventTriggerFiltered;
};
