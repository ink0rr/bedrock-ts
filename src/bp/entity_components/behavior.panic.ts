// auto generated
import { DamageSource } from "../../shared/damage_source.js";
import { SoundEvent } from "../../shared/sound_event.js";

/**
 * Allows the mob to enter the panic state, which makes it run around and away from the damage source that made it enter this state.
 */
export type EntityBehaviorPanicComponent = {
  priority?: number;
  /**
   * If true, this mob will not stop panicking until it can't move anymore or the goal is removed from it.
   */
  force?: boolean;
  /**
   * The list of Entity Damage Sources that will cause this mob to panic.
   * @default all
   */
  damage_sources?: DamageSource;
  /**
   * If true, the mob will not panic in response to damage from other mobs (only fire/lava etc).
   */
  ignore_mob_damage?: boolean;
  /**
   * If true, the mob will prefer water over land.
   */
  prefer_water?: boolean;
  /**
   * Movement speed multiplier of the mob when using this AI Goal.
   * @default 1
   */
  speed_multiplier?: number;
  panic_sound?: SoundEvent;
  sound_interval?:
    | number
    | {
        range_min?: number;
        range_max?: number;
      };
};
