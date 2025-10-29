// auto generated
/**
 * Modifies use effects, including how long the item takes to use and the player's speed when used in combination with components like Shooter, Throwable, or Food.
 */
export type ItemUseModifiersComponent = {
  /**
   * Whether an item emits vibrations when it starts or stops being used
   */
  emit_vibrations?: boolean;
  /**
   * Modifier value to scale the players movement speed when item is in use.
   */
  movement_modifier?: number;
  /**
   * How long the item takes to use in seconds.
   */
  use_duration?: number;
};
