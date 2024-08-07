/**
 * Defines physics properties of an actor, including if it is affected by gravity or if it collides with objects.
 */
export type EntityPhysicsComponent = {
  /**
   * Whether or not the object collides with things.
   * @default true
   */
  has_collision?: boolean;
  /**
   * Whether or not the entity is affected by gravity.
   * @default true
   */
  has_gravity?: boolean;
  /**
   * Whether or not the entity should be pushed towards the nearest open area when stuck inside a block.
   */
  push_towards_closest_space?: boolean;
};
