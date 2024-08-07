import { Filter } from "../../shared/filter.js";

/**
 * Keeps track of entity group size in the given radius.
 */
export type EntityGroupSizeComponent = {
  /**
   * Radius from center of entity.
   * @default 16
   */
  radius?: number;
  /**
   * The list of conditions that must be satisfied for other entities to be counted towards group size.
   */
  filters?: Filter;
};
