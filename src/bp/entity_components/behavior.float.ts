/**
 * Allows the mob to stay afloat while swimming. Passengers will be kicked out the moment the mob's head goes underwater, which may not happen for tall mobs.
 */
export type EntityBehaviorFloatComponent = {
  priority?: number;
  /**
   * If true, the mob will keep sinking as long as it has passengers.
   */
  sink_with_passengers?: boolean;
};
