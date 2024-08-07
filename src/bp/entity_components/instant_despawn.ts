/**
 * Despawns the Actor immediately.
 */
export type EntityInstantDespawnComponent = {
  /**
   * If true, all entities linked to this entity in a child relationship (eg. leashed) will also be despawned.
   */
  remove_child_entities?: boolean;
};
