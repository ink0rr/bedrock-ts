/**
 * Determines whether an item should eventually despawn while floating in the world.
 */
export type ItemShouldDespawnComponent =
  | {
      /**
       * Sets whether the item should eventually despawn while floating in the world.
       */
      value?: boolean;
    }
  | boolean;
