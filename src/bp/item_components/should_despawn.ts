/**
 * Whether the item should eventually despawn while floating in the world.
 */
export type ItemShouldDespawnComponent =
  | boolean
  | {
      value?: boolean;
    };
