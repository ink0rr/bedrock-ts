import { EventTrigger } from "../../shared/event_trigger.js";
import { EntityIdentifier } from "../../shared/literals/entity_identifier.js";
import { LegacyParticle } from "../../shared/literals/legacy_particle.js";
import { MoLang } from "../../shared/molang.js";
import { PotionId } from "../../shared/potion_id.js";
import { SoundEvent } from "../../shared/sound_event.js";
import { SpellEffects } from "../../shared/spell_effects.js";

/**
 * Allows the entity to be a thrown entity.
 */
export type EntityProjectileComponent = {
  on_hit?: {
    definition_event?: {
      affect_projectile?: boolean;
      affect_shooter?: boolean;
      affect_target?: boolean;
      affect_splash_area?: boolean;
      splash_area?: number;
      event_trigger?: EventTrigger;
    };
    grant_xp?: {
      minXP?: number;
      maxXP?: number;
      xp?: number;
    };
    spawn_aoe_cloud?: {
      radius?: number;
      radius_on_use?: number;
      potion?: PotionId;
      particle?: LegacyParticle;
      duration?: number;
      color?: Array<number>;
      affect_owner?: boolean;
      reapplication_delay?: number;
    };
    impact_damage?: {
      filter?: MoLang;
      damage?: Array<number> | number;
      /**
       * If true, the projectile will knock back the entity it hits.
       * @default true
       */
      knockback?: boolean;
      /**
       * If true, damage will be randomized based on damage and speed.
       */
      semi_random_diff_damage?: boolean;
      /**
       * If true, this entity will be destroyed when hit.
       */
      destroy_on_hit?: boolean;
      max_critical_damage?: number;
      min_critical_damage?: number;
      power_multiplier?: number;
      should_bounce?: boolean;
      channeling?: boolean;
      set_last_hurt_requires_damage?: boolean;
      destroy_on_hit_requres_damage?: boolean;
    };
    spawn_chance?: {
      first_spawn_percent_chance?: number;
      first_spawn_chance?: number;
      second_spawn_percent_chance?: number;
      second_spawn_chance?: number;
      first_spawn_count?: number;
      second_spawn_count?: number;
      spawn_mob?: EntityIdentifier;
      spawn_definition?: EntityIdentifier;
      spawn_baby?: boolean;
    };
    mob_effect?: {
      effect?: SpellEffects;
      duration?: number;
      durationeasy?: number;
      durationnormal?: number;
      durationhard?: number;
      amplifier?: number;
      ambient?: boolean;
      visible?: boolean;
    };
    stick_in_ground?: {
      shake_time?: number;
    };
    thrown_potion_effect?: {};
    douse_fire?: {};
    arrow_effect?: {};
    remove_on_hit?: {};
    teleport_owner?: {};
    particle_on_hit?: {
      particle_type?: LegacyParticle;
      num_particles?: number;
      on_entity_hit?: boolean;
      on_other_hit?: boolean;
    };
    catch_fire?: {
      /**
       * If true, whether the projectile causes fire is affected by the mob griefing game rule.
       */
      fire_affected_by_griefing?: boolean;
      /**
       * Time in seconds that the entity hit will be on fire for.
       * @default 5
       */
      on_fire_time?: number;
    };
    wind_burst_on_hit?: {};
  } & {
    /**
     * Freezes water on hit.
     */
    freeze_on_hit?: {
      shape?: "sphere" | "cube";
      snap_to_block?: boolean;
      size?: number;
    };
  };
  shoot_sound?: SoundEvent;
  /**
   * The sound that plays when the projectile hits something.
   */
  hit_sound?: SoundEvent;
  hit_ground_sound?: SoundEvent;
  /**
   * If true, the projectile will be treated as dangerous to the players.
   */
  is_dangerous?: boolean;
  /**
   * The fraction of the projectile's speed maintained every frame while traveling in air.
   * @default 0.99
   */
  inertia?: number;
  /**
   * The fraction of the projectile's speed maintained every frame while traveling in water.
   * @default 0.6
   */
  liquid_inertia?: number;
  /**
   * Determines the velocity of the projectile.
   * @default 1.3
   */
  power?: number;
  /**
   * The gravity applied to this entity when thrown. The higher the value, the faster the entity falls.
   * @default 0.05
   */
  gravity?: number;
  /**
   * The base accuracy. Accuracy is determined by the formula uncertaintyBase - difficultyLevel * uncertaintyMultiplier.
   */
  uncertainty_base?: number;
  /**
   * Determines how much difficulty affects accuracy. Accuracy is determined by the formula uncertaintyBase - difficultyLevel * uncertaintyMultiplier.
   */
  uncertainty_multiplier?: number;
  anchor?: number;
  /**
   * If true, the entity hit will be struck by lightning.
   */
  lightning?: boolean;
  /**
   * Determines the angle at which the projectile is thrown.
   */
  angle_offset?: number;
  /**
   * If true, damage will be randomized based on damage and speed.
   */
  semi_random_diff_damage?: boolean;
  /**
   * If true, the projectile will be shot towards the target of the entity firing it.
   * @default true
   */
  shoot_target?: boolean;
  stop_on_hurt?: boolean;
  /**
   * If true, the projectile can hit multiple entities per flight.
   * @default true
   */
  multiple_targets?: boolean;
  /**
   * If true, the projectile will bounce upon hit.
   */
  should_bounce?: boolean;
  /**
   * If true, this entity will be reflected back when hit.
   */
  reflect_on_hurt?: boolean;
  /**
   * If true, the entity hit will be set on fire.
   */
  catch_fire?: boolean;
  /**
   * The offset from the entity's anchor where the projectile will spawn.
   */
  offset?: Array<number>;
  /**
   * If true, the projectile will produce additional particles when a critical hit happens.
   */
  crit_particle_on_hurt?: boolean;
  /**
   * If true, the projectile homes in to the nearest entity.
   */
  homing?: boolean;
  /**
   * If true, this entity will be destroyed when hit.
   */
  destroy_on_hurt?: boolean;
};
