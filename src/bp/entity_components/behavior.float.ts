// auto generated
/**
 * Allows the mob to stay afloat while swimming. Passengers will be kicked out the moment the mob's head goes underwater, which may not happen for tall mobs.
 */
export type EntityBehaviorFloatComponent = {
  priority?: number;
  /**
   * The chance per tick to cause an upward impulse.
   */
  chance_per_tick_to_float?: number;
  /**
   * If true, the mob will keep sinking as long as it has passengers.
   */
  sink_with_passengers?: boolean;
  /**
   * Time in seconds that a floating vehicles head can be underwater before it causes its passengers to dismount.
   */
  time_under_water_to_dismount_passengers?: number;
};
