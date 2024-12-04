// auto generated
import { Filter } from "../../shared/filter.js";
import { EntityEventTrigger } from "../entity_behavior/event.js";

/**
 * Defines the behavior when another entity looks at this entity.
 */
export type EntityLookedAtComponent = {
  /**
   * Defines, in degrees, the width of the field of view for entities looking at the owner entity. If 'scale_fov_by_distance' is set to true, this value corresponds to the field of view at a distance of one block between the entities.
   * @default 26
   */
  field_of_view?: number;
  /**
   * Defines the entities that can trigger this component.
   */
  filters?: Filter;
  /**
   * Defines which entities are considered when searching for entities looking at the owner entity.
   */
  find_players_only?: boolean;
  /**
   * Defines the type of block shape used to check for line of sight obstructions.
   * @default collision
   */
  line_of_sight_obstruction_type?: "outline" | "collision" | "collision_for_camera";
  /**
   * A list of locations on the owner entity towards which line of sight checks are performed. At least one location must be unobstructed for the entity to be considered as looked at.
   */
  look_at_locations?: Array<{
    location?: "head" | "body" | "feet";
    vertical_offset?: number;
  }>;
  /**
   * Specifies the range for the random number of seconds that must pass before the owner entity can check again for entities looking at it, after detecting an entity looking at it.
   */
  looked_at_cooldown?: Array<number>;
  /**
   * Defines the event to trigger when an entity is detected looking at the owner entity.
   */
  looked_at_event?: EntityEventTrigger;
  /**
   * Defines the event to trigger when no entity is found looking at the owner entity.
   */
  not_looked_at_event?: EntityEventTrigger;
  /**
   * When true, the field of view narrows as the distance between the owner entity and the entity looking at it increases. This ensures that the width of the view cone remains somewhat constant towards the owner entity position, regardless of distance.
   * @default true
   */
  scale_fov_by_distance?: boolean;
  /**
   * Maximum distance the owner entity will search for entities looking at it.
   * @default 10
   */
  search_radius?: number;
  /**
   * Defines if and how the owner entity will set entities that are looking at it as its combat targets.
   * @default once_and_stop_scanning
   */
  set_target?: "never" | "once_and_stop_scanning" | "once_and_keep_scanning";
};
