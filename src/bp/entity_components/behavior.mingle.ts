// auto generated
import { EntityIdentifier } from "../../shared/literals/entity_identifier.js";

/**
 * Allows an entity to go to the village bell and mingle with other entities.
 */
export type EntityBehaviorMingleComponent = {
  priority?: number;
  /**
   * Movement speed multiplier of the mob when using this AI Goal.
   * @default 1
   */
  speed_multiplier?: number;
  /**
   * Amount of time in seconds that the entity will chat with another entity.
   * @default 1
   */
  duration?: number;
  /**
   * Time in seconds the mob has to wait before using the goal again.
   */
  cooldown_time?: number;
  /**
   * The entity type that this entity is allowed to mingle with.
   */
  mingle_partner_type?: Array<EntityIdentifier> | EntityIdentifier;
  /**
   * The distance from its partner that this entity will mingle. If the entity type is not the same as the entity, this value needs to be identical on both entities.
   * @default 2
   */
  mingle_distance?: number;
};
