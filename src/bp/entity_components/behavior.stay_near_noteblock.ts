// auto generated
/**
 * The entity will attempt to toss the items from its inventory to a nearby recently played noteblock.
 */
export type EntityBehaviorStayNearNoteblockComponent = {
  priority?: number;
  /**
   * Sets the time an entity should stay near a noteblock after hearing it.
   */
  listen_time?: number;
  /**
   * Sets the entity's speed when moving toward the block.
   * @default 1
   */
  speed?: number;
  /**
   * Sets the distance the entity needs to be away from the block to attempt to start the goal.
   * @default 10
   */
  start_distance?: number;
  /**
   * Sets the distance from the block the entity will attempt to reach.
   * @default 2
   */
  stop_distance?: number;
};
