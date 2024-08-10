// auto generated
import { EntityIdentifier } from "../../shared/literals/entity_identifier.js";
import { SoundEvent } from "../../shared/sound_event.js";
import { EntityEventTrigger } from "../entity_behavior/event.js";
import { EntityBehaviorType } from "../entity_behavior/type.js";

/**
 * Allows this entity to avoid certain mob types.
 */
export type EntityBehaviorAvoidMobTypeComponent = {
  priority?: number;
  /**
   * The list of conditions another entity must meet to be a valid target to avoid.
   */
  entity_types?: EntityIdentifier | EntityBehaviorType;
  /**
   * Whether or not to ignore direct line of sight while this entity is running away from other specified entities.
   */
  ignore_visibility?: boolean;
  /**
   * Determine if we should remove target when fleeing or not.
   */
  remove_target?: boolean;
  /**
   * Maximum distance to look for an avoid target for the entity.
   * @default 3
   */
  max_dist?: number;
  /**
   * How many blocks away from its avoid target the entity must be for it to stop fleeing from the avoid target.
   * @default 10
   */
  max_flee?: number;
  /**
   * Percent chance this entity will stop avoiding another entity based on that entity's strength, where 1.0 = 100%.
   * @default 1
   */
  probability_per_strength?: number;
  /**
   * Multiplier for sprint speed. 1.0 means keep the regular speed, while higher numbers make the sprint speed faster.
   * @default 1
   */
  sprint_speed_multiplier?: number;
  /**
   * Multiplier for walking speed. 1.0 means keep the regular speed, while higher numbers make the walking speed faster.
   * @default 1
   */
  walk_speed_multiplier?: number;
  /**
   * Event that is triggered when escaping from a mob.
   */
  on_escape_event?: EntityEventTrigger;
  /**
   * The sound event to play when the mob is avoiding another mob.
   */
  avoid_mob_sound?: SoundEvent;
  /**
   * The range of time in seconds to randomly wait before playing the sound again.
   */
  sound_interval?: {
    range_min?: number;
    range_max?: number;
  };
  /**
   * The next target position the entity chooses to avoid another entity will be chosen within this XZ Distance.
   * @default 16
   */
  avoid_target_xz?: number;
  /**
   * The next target position the entity chooses to avoid another entity will be chosen within this Y Distance.
   * @default 7
   */
  avoid_target_y?: number;
  /**
   * How many blocks within range of its avoid target the entity must be for it to begin sprinting away from the avoid target.
   * @default 7
   */
  sprint_distance?: number;
};
