import { EntityIdentifier } from "../../shared/entity_identifier.js";
import { Filter } from "../../shared/filter.js";
import { ItemIdentifier } from "../../shared/item_identifier.js";
import { SoundEvent } from "../../shared/sound_event.js";
import { VanillaEntityEvent } from "../entity_behavior/event.js";

/**
 * Adds a timer after which this entity will spawn another entity or item (similar to vanilla's chicken's egg-laying behavior).
 */
export type EntitySpawnEntityComponent = {
  entities?:
    | Array<{
        /**
         * If true, this the spawned entity will be leashed to the parent.
         */
        should_leash?: boolean;
        /**
         * The number of entities of this type to spawn each time that this triggers.
         * @default 1
         */
        num_to_spawn?: number;
        /**
         * Minimum amount of time to randomly wait in seconds before another entity is spawned.
         * @default 300
         */
        min_wait_time?: number;
        /**
         * Maximum amount of time to randomly wait in seconds before another entity is spawned.
         * @default 600
         */
        max_wait_time?: number;
        /**
         * Identifier of the entity to spawn, leave empty to spawn the item defined above instead.
         */
        spawn_entity?: EntityIdentifier;
        /**
         * Event to call when the entity is spawned.
         */
        spawn_event?: VanillaEntityEvent;
        /**
         * Item identifier of the item to spawn.
         * @default egg
         */
        spawn_item?: ItemIdentifier;
        /**
         * Method to use to spawn the entity.
         */
        spawn_method?: string;
        /**
         * Identifier of the sound effect to play when the entity is spawned.
         * @default plop
         */
        spawn_sound?: SoundEvent;
        /**
         * If present, the specified entity will only spawn if the filter evaluates to true.
         */
        filters?: Filter | Array<Filter>;
        /**
         * If true, this component will only ever spawn the specified entity once.
         */
        single_use?: boolean;
      }>
    | {
        /**
         * If true, this the spawned entity will be leashed to the parent.
         */
        should_leash?: boolean;
        /**
         * The number of entities of this type to spawn each time that this triggers.
         * @default 1
         */
        num_to_spawn?: number;
        /**
         * Minimum amount of time to randomly wait in seconds before another entity is spawned.
         * @default 300
         */
        min_wait_time?: number;
        /**
         * Maximum amount of time to randomly wait in seconds before another entity is spawned.
         * @default 600
         */
        max_wait_time?: number;
        /**
         * Identifier of the entity to spawn, leave empty to spawn the item defined above instead.
         */
        spawn_entity?: EntityIdentifier;
        /**
         * Event to call when the entity is spawned.
         */
        spawn_event?: VanillaEntityEvent;
        /**
         * Item identifier of the item to spawn.
         * @default egg
         */
        spawn_item?: ItemIdentifier;
        /**
         * Method to use to spawn the entity.
         */
        spawn_method?: string;
        /**
         * Identifier of the sound effect to play when the entity is spawned.
         * @default plop
         */
        spawn_sound?: SoundEvent;
        /**
         * If present, the specified entity will only spawn if the filter evaluates to true.
         */
        filters?: Filter | Array<Filter>;
        /**
         * If true, this component will only ever spawn the specified entity once.
         */
        single_use?: boolean;
      };
};
