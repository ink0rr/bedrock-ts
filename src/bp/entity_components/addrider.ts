// auto generated
import { EntityIdentifier } from "../../shared/literals/entity_identifier.js";
import { EntityEventIdentifier } from "../entity_behavior/event.js";

/**
 * Adds a rider to the entity. Requires minecraft:rideable.
 */
export type EntityAddriderComponent = {
  /**
   * The entity type that will be riding this entity.
   */
  entity_type?: EntityIdentifier;
  /**
   * The spawn event that will be used when the riding entity is created.
   */
  spawn_event?: EntityEventIdentifier;
};
