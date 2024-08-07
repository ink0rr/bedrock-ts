import { Filter } from "../../shared/filter.js";
import { MoLang } from "../../shared/molang.js";
import { SoundEvent } from "../../shared/sound_event.js";

/**
 * Allows this entity to track anger towards a set of nuisances.
 */
export type EntityAngerLevelComponent = {
  /**
   * Anger level will decay over time. Defines how often anger towards all nuisances will be decreased by one.
   * @default 1
   */
  anger_decrement_interval?: number;
  /**
   * Anger boost applied to angry threshold when mob gets angry.
   * @default 20
   */
  angry_boost?: number;
  /**
   * Threshold that define when the mob is considered angry at a nuisance.
   * @default 80
   */
  angry_threshold?: number;
  /**
   * The default amount of annoyingness for any given nuisance. Specifies how much to raise anger level on each provocation.
   */
  default_annoyingness?: number;
  default_projectile_annoyingness?: number;
  /**
   * The maximum anger level that can be reached. Applies to any nuisance.
   * @default 100
   */
  max_anger?: number;
  /**
   * Filter that is applied to determine if a mob can be a nuisance.
   */
  nuisance_filter?: Filter;
  /**
   * Sounds to play when the entity is getting provoked. Evaluated in order. First matching condition wins.
   */
  on_increase_sounds?: Array<{
    /**
     * A Molang expression describing under which conditions to play this sound, given that the entity was provoked.
     */
    condition?: MoLang;
    /**
     * The sound to play.
     */
    sound?: SoundEvent;
  }>;
  /**
   * Defines if the mob should remove target if it falls below 'angry' threshold.
   * @default true
   */
  remove_targets_below_angry_threshold?: boolean;
};
