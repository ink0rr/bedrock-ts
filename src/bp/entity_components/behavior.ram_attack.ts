import { SoundEvent } from "../../shared/sound_event.js";
import { EntityEventTrigger } from "../entity_behavior/event.js";

/**
 * Allows this entity to damage a target by using a running attack.
 */
export type EntityBehaviorRamAttackComponent = {
  priority?: number;
  /**
   * Sets the entity's speed when running toward the target.
   * @default 1
   */
  run_speed?: number;
  /**
   * Sets the entity's speed when charging toward the target.
   * @default 2
   */
  ram_speed?: number;
  /**
   * The distance at which the mob start to run with ram speed.
   */
  ram_distance?: number;
  /**
   * The event to trigger when attacking.
   */
  on_start?: EntityEventTrigger | Array<EntityEventTrigger>;
  /**
   * The modifier to knockback that babies have.
   * @default 0.333333
   */
  baby_knockback_modifier?: number;
  /**
   * Minimum and maximum cooldown time-range (positive, in seconds) between each attempted ram attack.
   */
  cooldown_range?: [number, number];
  /**
   * The force of the knockback of the ram attack.
   * @default 5
   */
  knockback_force?: number;
  /**
   * The height of the knockback of the ram attack.
   * @default 0.1
   */
  knockback_height?: number;
  /**
   * The minimum distance at which the mob can start a ram attack.
   */
  min_ram_distance?: number;
  /**
   * The sound to play when an entity is about to perform a ram attack.
   */
  pre_ram_sound?: SoundEvent;
  /**
   * The sound to play when an entity is impacting on a ram attack.
   */
  ram_impact_sound?: SoundEvent;
};
