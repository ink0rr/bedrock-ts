// auto generated
import { Filter } from "../../shared/filter.js";

/**
 * When set, blocks entities from attacking the owner entity unless they have the 'minecraft:ignore_cannot_be_attacked' component.
 */
export type EntityIgnoreCannotBeAttackedComponent = {
  /**
   * Defines which entities are exceptions and are allowed to be attacked by the owner entity, potentially attacked entity is subject 'other'. If this is not specified then all attacks by the owner are allowed.
   */
  filters?: Filter;
};
