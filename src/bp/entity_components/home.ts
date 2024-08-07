import { BlockIdentifier } from "../../shared/block_identifier.js";

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
};
