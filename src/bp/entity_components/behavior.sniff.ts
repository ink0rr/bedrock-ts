// auto generated
/**
 * Allows this entity to detect the nearest player within 'sniffing_radius' and update its 'minecraft:suspect_tracking' component state.
 */
export type EntityBehaviorSniffComponent = {
  priority?: number;
  /**
   * Cooldown range between sniffs in seconds.
   */
  cooldown_range?: number | [number, number];
  /**
   * Sniffing duration in seconds.
   * @default 1
   */
  duration?: number;
  /**
   * Mob detection radius.
   * @default 5
   */
  sniffing_radius?: number;
  /**
   * Mob suspicion horizontal radius. When a player is within this radius horizontally, the anger level towards that player is increased.
   * @default 3
   */
  suspicion_radius_horizontal?: number;
  /**
   * Mob suspicion vertical radius. When a player is within this radius vertically, the anger level towards that player is increased.
   * @default 3
   */
  suspicion_radius_vertical?: number;
};
