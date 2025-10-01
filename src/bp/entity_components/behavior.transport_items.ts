// auto generated
import { ItemDescriptor } from "../../shared/item_descriptor.js";

/**
 * A behavior that enables a mob to transport items from and to containers.
 */
export type EntityBehaviorTransportItemsComponent = {
  priority?: number;
  /**
   * When true, multiple mobs with the Transport Items Goal are allowed to simultaneously interact with a container.
   */
  allow_simultaneous_interaction?: boolean;
  /**
   * A list of item descriptors that are the only items the mob is allowed to transport. If this and "disallowed_items" are both empty, then all items are allowed. If non-empty "disallowed_items" must be empty.
   */
  allowed_items?: Array<ItemDescriptor>;
  /**
   * A list of block descriptors that should be a container type to put items in.
   */
  destination_container_types?: Array<string>;
  /**
   * A list of item descriptors that are the mob is not allowed to transport. If non-empty "allowed_items" must be empty.
   */
  disallowed_items?: Array<ItemDescriptor>;
  /**
   * When the mob cannot find a container in which to get or put items, the goal will stop being active for this amount of time in seconds.
   * @default 20
   */
  idle_cooldown?: number;
  /**
   * How long the mob will wait after spawning or getting the goal added before the goal can start.
   * @default 20
   */
  initial_cooldown?: number;
  /**
   * The amount of time in seconds spent interacting with the containers.
   */
  interaction_time?: number;
  /**
   * The maximum stack size that the mob will try to take from a container.
   */
  max_stack_size?: number;
  /**
   * The maximum number of containers that the mob will try to take/place items from before going on cooldown and starting over.
   */
  max_visited_containers?: number;
  /**
   * The strategy to use for placing the transported item. Any - always place if there is room, With matching - place if there is a matching item in the container, With matching or empty - like With matching but will also place in empty containers.
   */
  place_strategy?: "any" | "with_matching" | "with_matching_or_empty";
  /**
   * The maximum search distance horizontally and vertically at which to find containers for taking or placing items.
   */
  search_distance?:
    | Array<number>
    | {
        x?: number;
        y?: number;
      };
  /**
   * The strategy to use for finding source or destination containers. The nearest valid container or a random valid container in range.
   */
  search_strategy?: "nearest" | "random";
  /**
   * A list of block descriptors that should be a container type to get items from.
   */
  source_container_types?: Array<string>;
};
