// auto generated
import { Filters } from "../../shared/filter.js";

/**
 * Despawns the Actor when the despawn rules or optional filters evaluate to true.
 */
export type EntityDespawnComponent = {
  /**
   * If true, all entities linked to this entity in a child relationship (eg. leashed) will also be despawned.
   */
  remove_child_entities?: boolean;
  /**
   * The list of conditions that must be satisfied before the Actor is despawned. If a filter is defined then standard despawn rules are ignored.
   */
  filters?: Filters;
  despawn_from_distance?: {
    /**
     * Maximum distance for standard despawn rules to instantly despawn the mob.
     * @default 128
     */
    max_distance?: number;
    /**
     * Minimum distance for standard despawn rules to try to despawn the mob.
     * @default 32
     */
    min_distance?: number;
  };
  /**
   * Determines if 'min_range_random_chance' is used in the standard despawn rules.
   * @default true
   */
  despawn_from_chance?: boolean;
  /**
   * Determines if the 'min_range_inactivity_timer' is used in the standard despawn rules.
   * @default true
   */
  despawn_from_inactivity?: boolean;
  /**
   * Determines if the mob is instantly despawned at the edge of simulation distance in the standard despawn rules.
   * @default true
   */
  despawn_from_simulation_edge?: boolean;
  /**
   * The amount of time in seconds that the mob must be inactive.
   * @default 30
   */
  min_range_inactivity_timer?: number;
  /**
   * A random chance between 1 and the given value.
   * @default 800
   */
  min_range_random_chance?: number;
};
