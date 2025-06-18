// auto generated
import { Filters } from "../../shared/filter.js";
import { EntityIdentifier } from "../../shared/literals/entity_identifier.js";

/**
 * Allows the mob to follow other mobs.
 */
export type EntityBehaviorFollowMobComponent = {
  priority?: number;
  /**
   * If non-empty, provides criteria for filtering which nearby Mobs can be followed. If empty default criteria will be used, which will exclude Players, Squid variants, Fish variants, Tadpoles, Dolphins, and mobs of the same type as the owner of the Goal.
   */
  filters?: Filters;
  /**
   * The type of actor to prefer following. If left unspecified, a random actor among those in range will be chosen.
   */
  preferred_actor_type?: EntityIdentifier;
  /**
   * Movement speed multiplier of the mob when using this AI Goal.
   * @default 1
   */
  speed_multiplier?: number;
  /**
   * The distance in blocks that the owner can be away from this mob before it starts following it.
   */
  start_distance?: number;
  /**
   * The distance in blocks this mob will stop from its owner while following it.
   * @default 2
   */
  stop_distance?: number;
  /**
   * The distance in blocks it will look for a mob to follow.
   */
  search_range?: number;
  /**
   * If true, the mob will respect the 'minecraft:home' component's 'restriction_radius' field when choosing a target to follow. If false, it will choose target position without considering home restrictions.
   * @default true
   */
  use_home_position_restriction?: boolean;
};
