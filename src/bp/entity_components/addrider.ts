// auto generated
import { EntityIdentifier } from "../../shared/literals/entity_identifier.js";
import { EntityEventIdentifier } from "../entity_behavior/event.js";

/**
 * Adds a rider to the entity. Requires minecraft:rideable.
 */
export type EntityAddriderComponent = {
  /**
   * List of riders to be added to the entity. Can only spawn as many riders as "minecraft:rideable" has "seat_count".
   */
  riders?: Array<{
    /**
     * The entity type that will be riding this entity.
     */
    entity_type?: EntityIdentifier;
    /**
     * The spawn event that will be used when the riding entity is created.
     */
    spawn_event?: EntityEventIdentifier;
  }>;
};
