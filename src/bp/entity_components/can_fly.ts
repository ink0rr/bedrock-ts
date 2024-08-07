/**
 * Marks the entity as being able to fly, the pathfinder won't be restricted to paths where a solid block is required underneath it.
 */
export type EntityCanFlyComponent = Record<string, never>;
