import { SoundEvent } from "../../shared/sound_event.js";
import { EntityBehaviorType } from "../entity_behavior/type.js";

/**
 * Allows the mob to stop and sneeze possibly startling nearby mobs and dropping an item.
 */
export type EntityBehaviorSneezeComponent = {
  priority?: number;
  /**
   * The probability of sneezing. A value of 1.00 is 100%.
   */
  probability?: number;
  /**
   * Time in seconds the mob has to wait before using the goal again.
   */
  cooldown_time?: number;
  /**
   * Distance in blocks that mobs will be startled.
   */
  within_radius?: number;
  /**
   * List of entity types this mob will startle (cause to jump) when it sneezes.
   */
  entity_types?: EntityBehaviorType;
  /**
   * The probability that the mob will drop an item when it sneezes.
   * @default 1
   */
  drop_item_chance?: number;
  /**
   * Loot table to select dropped items from.
   */
  loot_table?: string;
  /**
   * Sound to play when the sneeze is about to happen.
   */
  prepare_sound?: SoundEvent;
  /**
   * The time in seconds that the mob takes to prepare to sneeze (while the prepare_sound is playing).
   * @default 1
   */
  prepare_time?: number;
  /**
   * Sound to play when the sneeze occurs.
   */
  sound?: SoundEvent;
};
