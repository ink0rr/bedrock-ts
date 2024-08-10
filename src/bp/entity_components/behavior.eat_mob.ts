// auto generated
import { LootTablePath } from "../../shared/literals/loot_table_path.js";
import { SoundEvent } from "../../shared/sound_event.js";

/**
 * Allows the entity to eat a specified Mob.
 */
export type EntityBehaviorEatMobComponent = {
  priority?: number;
  /**
   * Sets the time in seconds the eat animation should play for.
   * @default 1
   */
  eat_animation_time?: number;
  /**
   * Sets the sound that should play when eating a mob.
   */
  eat_mob_sound?: SoundEvent;
  /**
   * The loot table for loot to be dropped when eating a mob.
   */
  loot_table?: LootTablePath;
  /**
   * Sets the force which the mob-to-be-eaten is pulled towards the eating mob.
   * @default 1
   */
  pull_in_force?: number;
  /**
   * Sets the desired distance to be reached before eating the mob.
   * @default 1
   */
  reach_mob_distance?: number;
  /**
   * Sets the entity's speed when running toward the target.
   * @default 1
   */
  run_speed?: number;
};
