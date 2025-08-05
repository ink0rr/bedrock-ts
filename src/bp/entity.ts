import { Filter, FilterSubject } from "../shared/filter.js";
import { LiteralUnion, ParticleIdentifier, SoundDefinitionIdentifier } from "../shared/index.js";
import { EntityIdentifier } from "../shared/literals/entity_identifier.js";
import { MoLang } from "../shared/molang.js";
import { StringOrRecord } from "../shared/string_or_record.js";
import { EntityEventIdentifier, EntityEventTrigger } from "./entity_behavior/event.js";
import { EntityComponents } from "./entity_components/index.js";

export type Entity = {
  format_version: LiteralUnion<"1.21.100">;
  "minecraft:entity": {
    description: {
      identifier: string;
      runtime_identifier?: EntityIdentifier;
      /**
       * Whether this entity should have a spawn egg.
       */
      is_spawnable?: boolean;
      /**
       * Whether this entity can be summoned with commands.
       */
      is_summonable?: boolean;
      /**
       * Whether the entity requires experimental gameplay.
       */
      is_experimental?: boolean;
      /**
       * List server animations and animation controllers to be used in this entity.
       */
      animations?: Record<string, string>;
      scripts?: {
        /**
         * Animations to run on this entity.
         */
        animate?: StringOrRecord[];
      };
      properties?: Record<string, EntityProperty>;
      aliases?: Record<string, Record<string, MoLang>>;
      spawn_category?: "ambient" | "axolotls" | "creature" | "monster" | "water_ambient";
    };
    components?: EntityComponents;
    component_groups?: Record<string, EntityComponents>;
    events?: Partial<Record<EntityEventIdentifier, EntityEvent>>;
    do_not_upgrade?: Record<never, never>;
  };
};

export type EntityProperty = {
  /**
   * The data type of the property.
   */
  type: "int" | "float" | "bool" | "enum";
  /**
   * The default value of the property, supports an integer value or a molang string.
   */
  default: MoLang;
  /**
   * Defaults to false, allows the property to be queried on the client.
   */
  client_sync?: boolean;
  /**
   * The range of values of the property.
   */
  range?: [number, number];
  /**
   * The enum values of the property.
   */
  values?: string[];
};

export type EntityEvent = {
  add?: {
    component_groups?: Array<string>;
  };
  remove?: {
    component_groups?: Array<string>;
  };
  filters?: Filter;
  /**
   * Trigger an event.
   */
  trigger?: EntityEventTrigger | EntityEventIdentifier;
  /**
   * Triggers a slash command or a list of slash commands.
   */
  queue_command?: {
    command?: Array<string> | string;
    /**
     * The target context to execute against.
     */
    target?: FilterSubject;
  };
  /**
   * Set a property on the entity.
   */
  set_property?: Record<string, MoLang>;
  emit_vibration?: "shear" | "entity_act" | "entity_interact";
  randomize?: Array<EntityEvent & { weight?: number }>;
  sequence?: Array<EntityEvent>;
  /**
   * Allows an entity to reset its target.
   */
  reset_target?: Record<string, never>;
  /**
   * Allows the entity to emit sounds.
   */
  play_sound?: {
    /**
     * The sound event to play.
     */
    sound: SoundDefinitionIdentifier;
  };
  /**
   * Allows particles to be emitted at the center of the entity's bounding box
   */
  emit_particle?: {
    /**
     * Specifies the type of particle to emit.
     */
    particle: ParticleIdentifier;
  };
  /**
   * Allows the entity to execute an event on the block at its home position, requires the 'minecraft:home' components.
   */
  execute_event_on_home_block?: {
    /**
     * The event to fire
     */
    event: EntityEventIdentifier;
  };
  /**
   * Evaluates every filter in order and executes the first valid one.
   */
  first_valid?: Array<EntityEvent>;
  /**
   * Sets the entity's home position to its current position.
   */
  set_home_position?: Record<string, never>;
  /**
   * Stops the entity's movement.
   */
  stop_movement?: {
    /**
     * Specifies whether vertical movement should be stopped.
     */
    stop_vertical_movement?: boolean;
    /**
     * Specifies whether horizontal movement should be stopped.
     */
    stop_horizontal_movement?: boolean;
  };
};
