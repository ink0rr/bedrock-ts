// auto generated
import { Filters } from "../../shared/filter.js";

/**
 * Allows an entity to teleport to its owner.
 */
export type EntityBehaviorTeleportToOwnerComponent = {
  priority?: number;
  /**
   * Conditions to be satisfied for the entity to teleport to its owner.
   */
  filters?: Filters;
  /**
   * The time in seconds that must pass for the entity to be able to try to teleport again.
   * @default 1
   */
  cooldown?: number;
};
