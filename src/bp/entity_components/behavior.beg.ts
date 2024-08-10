// auto generated
import { ItemIdentifier } from "../../shared/literals/item_identifier.js";

/**
 * Allows this mob to look at and follow the player that holds food they like.
 */
export type EntityBehaviorBegComponent = {
  priority?: number;
  /**
   * Distance in blocks the mob will beg from.
   * @default 8
   */
  look_distance?: number;
  /**
   * The range of time in seconds this mob will stare at the player holding a food they like, begging for it.
   */
  look_time?: [number, number];
  /**
   * List of items that this mob likes.
   */
  items?: Array<ItemIdentifier>;
};
