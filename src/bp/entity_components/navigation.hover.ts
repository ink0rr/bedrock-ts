import { EntityBehaviorNavigation } from "../entity_behavior/navigation.js";

/**
 * Allows this entity to generate paths that include vertical walls like the vanilla Spiders do.
 */
export type EntityNavigationHoverComponent = {
  avoid_powder_snow?: boolean;
} & EntityBehaviorNavigation;
