import { ItemIdentifier } from "../../shared/literals/item_identifier.js";

/**
 * Allows the mob to take a load off and snack on food that it found nearby.
 */
export type EntityBehaviorSnackingComponent = {
  priority?: number;
  /**
   * The cooldown time in seconds before the mob is able to snack again.
   * @default 7.5
   */
  snacking_cooldown?: number;
  /**
   * The minimum time in seconds before the mob is able to snack again.
   * @default 0.5
   */
  snacking_cooldown_min?: number;
  /**
   * This is the chance that the mob will stop snacking, from 0 to 1.
   * @default 0.0017
   */
  snacking_stop_chance?: number;
  /**
   * Items that we are interested in snacking on.
   */
  items?: Array<ItemIdentifier>;
};
