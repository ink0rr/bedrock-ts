import { Family } from "../../shared/family.js";

/**
 * Defines the families this entity belongs to.
 */
export type EntityTypeFamilyComponent = {
  /**
   * List of family names.
   */
  family?: Array<Family>;
};
