// auto generated
/**
 * Defines if the entity ticks the world and the radius around it to tick.
 */
export type EntityTickWorldComponent = {
  /**
   * The area around the entity to tick. Default: 2. Allowed range: 2-6.
   * @default 2
   */
  radius?: number;
  /**
   * The distance at which the closest player has to be before this entity despawns. This option will be ignored if never_despawn is true. Min: 128 blocks.
   * @default 128
   */
  distance_to_players?: number;
  /**
   * If true, this entity will not despawn even if players are far away. If false, distance_to_players will be used to determine when to despawn.
   * @default true
   */
  never_despawn?: boolean;
};
