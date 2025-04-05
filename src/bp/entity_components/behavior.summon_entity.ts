// auto generated
import { Filters, FilterSubject } from "../../shared/filter.js";
import { EntityIdentifier } from "../../shared/literals/entity_identifier.js";
import { SoundEvent } from "../../shared/sound_event.js";

/**
 * Allows the mob to attack the player by summoning other entities.
 */
export type EntityBehaviorSummonEntityComponent = {
  priority?: number;
  /**
   * List of spells for the mob to use to summon entities.
   */
  summon_choices?: Array<{
    /**
     * If true, the mob will do the casting animations and render spell particles.
     * @default true
     */
    do_casting?: boolean;
    filters?: Filters;
    /**
     * Lower bound of the activation distance in blocks for this spell, must not be negative.
     * @default 1
     */
    min_activation_range?: number;
    /**
     * Upper bound of the activation distance in blocks for this spell, must not be negative.
     * @default 32
     */
    max_activation_range?: number;
    /**
     * Time in seconds the mob has to wait before using the spell again.
     */
    cooldown_time?: number;
    /**
     * The weight of this spell. Controls how likely the mob is to choose this spell when casting one.
     */
    weight?: number;
    /**
     * Time in seconds the spell casting will take.
     */
    cast_duration?: number;
    /**
     * The color of the particles for this spell.
     */
    particle_color?: string;
    /**
     * The sound event to play when using this spell.
     */
    start_sound_event?: SoundEvent;
    /**
     * List of steps for the spell.
     */
    sequence?: Array<{
      /**
       * The base shape of this step. Valid values are circle and line.
       * @default "line"
       */
      shape?: "circle" | "line";
      /**
       * The target of the spell. This is where the spell will start (line will start here, circle will be centered here).
       * @default "self"
       */
      target?: FilterSubject;
      /**
       * Amount of time in seconds to wait before this step starts.
       */
      base_delay?: number;
      /**
       * Amount of time in seconds before each entity is summoned in this step.
       */
      delay_per_summon?: number;
      /**
       * Number of entities that will be spawned in this step.
       * @default 1
       */
      num_entities_spawned?: number;
      /**
       * The entity type of the entities we will spawn in this step.
       */
      entity_type?: EntityIdentifier;
      /**
       * The base size of the entity.
       * @default 1
       */
      size?: number;
      /**
       * Amount of time in seconds that the spawned entity will be alive for. A value of -1.0 means it will remain alive for as long as it can.
       * @default -1
       */
      entity_lifespan?: number;
      /**
       * The sound event to play for this step.
       */
      sound_event?: SoundEvent;
      /**
       * Maximum number of summoned entities at any given time.
       */
      summon_cap?: number;
      summon_cap_radius?: number;
      /**
       * Event to invoke on each summoned entity on spawn.
       */
      summon_event?: string;
    }>;
  }>;
};
