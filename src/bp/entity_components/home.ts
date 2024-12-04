// auto generated
import { BlockIdentifier } from "../../shared/literals/block_identifier.js";

/**
 * Saves a home pos for when the the entity is spawned.
 */
export type EntityHomeComponent = {
  /**
   * The radius that the entity will be restricted to in relation to its home.
   * @default -1
   */
  restriction_radius?: number;
  /**
   * Optional block list that the home position will be associated with. If any of the blocks no longer exist at that position, the home restriction is removed.
   */
  home_block_list?: Array<BlockIdentifier>;
  /**
   * Defines how the the entity will be restricted to its home position. However, entities that somehow got too far away from their home will always be able to move closer to it, if prompted to do so.
   */
  restriction_type?: "none" | "random_movement" | "all_movement";
};
