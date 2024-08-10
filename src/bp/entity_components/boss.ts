// auto generated
/**
 * The current state of the boss for updating the boss HUD.
 */
export type EntityBossComponent = {
  /**
   * Whether the sky should darken in the presence of the boss.
   */
  should_darken_sky?: boolean;
  /**
   * The max distance from the boss at which the boss's health bar is present on the players screen.
   * @default 55
   */
  hud_range?: number;
  /**
   * The name that will be displayed above the boss's health bar.
   */
  name?: string;
};
