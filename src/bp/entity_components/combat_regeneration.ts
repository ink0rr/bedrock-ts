/**
 * Gives Regeneration I and removes Mining Fatigue from the mob that kills the Actor's attack target.
 */
export type EntityCombatRegenerationComponent = {
  /**
   * The duration in seconds of Regeneration I added to the mob.
   * @default 5
   */
  regeneration_duration?: number;
  /**
   * Determines if the mob will grant mobs of the same type combat buffs if they kill the target.
   */
  apply_to_family?: boolean;
  /**
   * Determines if the mob will grant itself the combat buffs if it kills the target.
   */
  apply_to_self?: boolean;
};
