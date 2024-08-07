/**
 * Defines an entity's teleporting behavior.
 */
export type EntityTeleportComponent = {
  /**
   * If true, the entity will teleport randomly.
   * @default true
   */
  random_teleports?: boolean;
  /**
   * Maximum amount of time in seconds between random teleports.
   * @default 20
   */
  max_random_teleport_time?: number;
  /**
   * Minimum amount of time in seconds between random teleports.
   */
  min_random_teleport_time?: number;
  /**
   * Entity will teleport to a random position within the area defined by this cube.
   */
  random_teleport_cube?: [number, number, number];
  /**
   * Maximum distance the entity will teleport when chasing a target.
   * @default 16
   */
  target_distance?: number;
  /**
   * The chance that the entity will teleport between 0.0 and 1.0. 1.0 means 100%.
   * @default 1
   */
  target_teleport_chance?: number;
  /**
   * Modifies the chance that the entity will teleport if the entity is in daylight.
   * @default 0.01
   */
  light_teleport_chance?: number;
  /**
   * Modifies the chance that the entity will teleport if the entity is in darkness.
   * @default 0.01
   */
  dark_teleport_chance?: number;
};
