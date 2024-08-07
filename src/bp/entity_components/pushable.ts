/**
 * Defines what can push an entity between other entities and pistons.
 */
export type EntityPushableComponent = {
  /**
   * Whether the entity can be pushed by other entities.
   * @default true
   */
  is_pushable?: boolean;
  /**
   * Whether the entity can be pushed by pistons safely.
   * @default true
   */
  is_pushable_by_piston?: boolean;
};
