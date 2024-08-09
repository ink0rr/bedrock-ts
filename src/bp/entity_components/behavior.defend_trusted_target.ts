import { SoundEvent } from "../../shared/sound_event.js";
import { EntityEventTrigger } from "../entity_behavior/event.js";
import { EntityBehaviorType } from "../entity_behavior/type.js";

/**
 * Allows the mob to target another mob that hurts an entity it trusts.
 */
export type EntityBehaviorDefendTrustedTargetComponent = {
  priority?: number;
  /**
   * Time in seconds between attacks.
   */
  attack_interval?: number;
  /**
   * Distance in blocks that the target can be within to launch an attack.
   */
  within_radius?: number;
  /**
   * If true, only entities in this mob's viewing range can be selected as targets.
   */
  must_see?: boolean;
  /**
   * Sound to occasionally play while defending.
   */
  aggro_sound?: SoundEvent;
  sound_chance?: number;
  on_defend_start?: EntityEventTrigger;
  /**
   * Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more.
   * @default 3
   */
  must_see_forget_duration?: number;
  /**
   * List of entity types that this mob considers valid targets.
   */
  entity_types?: EntityBehaviorType;
};
