// auto generated
import { Filters } from "../../shared/filter.js";
import { EntityEventTrigger } from "../entity_behavior/event.js";

/**
 * Allows an entity to place blocks in the world.
 */
export type EntityBehaviorPlaceBlockComponent = {
  priority?: number;
  /**
   * If true, whether the goal is affected by the mob griefing game rule.
   */
  affected_by_griefing_rule?: boolean;
  /**
   * Filters for if the entity should try to place its block. Self and Target are set.
   */
  can_place?: Filters;
  /**
   * Chance each tick for the entity to try and place a block.
   */
  chance?: number;
  /**
   * Trigger ran if the entity does place its block. Self, Target, and Block are set.
   */
  on_place?: EntityEventTrigger;
  /**
   * Block descriptors for which blocks are valid to be placed from the entity's carried item, if empty all blocks are valid.
   */
  placeable_carried_blocks?: Array<string>;
  /**
   * Weighted block descriptors for which blocks should be randomly placed, if empty the entity will try to place its carried block from placeable_carried_blocks.
   */
  randomly_placeable_blocks?: Array<{
    block?: string;
    weight?: number;
  }>;
  /**
   * XZ range from which the entity will try and place blocks in.
   */
  xz_range?: number | Array<number>;
  /**
   * Y Range from which the entity will try and place blocks in.
   */
  y_range?: number | Array<number>;
};
