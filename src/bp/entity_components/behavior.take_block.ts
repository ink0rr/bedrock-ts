// auto generated
import { Filters } from "../../shared/filter.js";
import { EntityEventTrigger } from "../entity_behavior/event.js";

/**
 * Allows an entity to take blocks from the world.
 */
export type EntityBehaviorTakeBlockComponent = {
  priority?: number;
  /**
   * If true, whether the goal is affected by the mob griefing game rule.
   */
  affected_by_griefing_rule?: boolean;
  /**
   * Block descriptors for which blocks are valid to be taken by the entity, if empty all blocks are valid.
   */
  blocks?: Array<string>;
  /**
   * Filters for if the entity should try to take a block. Self and Target are set.
   */
  can_take?: Filters;
  /**
   * Chance each tick for the entity to try and take a block.
   */
  chance?: number;
  /**
   * Trigger ran if the entity does take a block. Self, Target, and Block are set.
   */
  on_take?: EntityEventTrigger;
  /**
   * If true, whether the entity needs line of sight to the block they are trying to take.
   */
  requires_line_of_sight?: boolean;
  /**
   * XZ range from which the entity will try and take blocks from.
   */
  xz_range?: number | Array<number>;
  /**
   * Y Range from which the entity will try and take blocks from.
   */
  y_range?: number | Array<number>;
};
