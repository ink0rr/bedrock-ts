// auto generated
import { SoundEvent } from "../../shared/sound_event.js";

/**
 * Allows this entity to perform a 'sonic boom' ranged attack.
 */
export type EntityBehaviorSonicBoomComponent = {
  priority?: number;
  /**
   * Cooldown in seconds required after using this attack until the entity can use sonic boom again.
   * @default 5
   */
  attack_cooldown?: number;
  /**
   * Attack damage of the sonic boom.
   * @default 30
   */
  attack_damage?: number;
  /**
   * Horizontal range (in blocks) at which the sonic boom can damage the target.
   * @default 15
   */
  attack_range_horizontal?: number;
  /**
   * Vertical range (in blocks) at which the sonic boom can damage the target.
   * @default 20
   */
  attack_range_vertical?: number;
  /**
   * Sound event for the attack.
   */
  attack_sound?: SoundEvent;
  /**
   * Sound event for the charge up.
   */
  charge_sound?: SoundEvent;
  /**
   * Goal duration in seconds.
   * @default 3
   */
  duration?: number;
  /**
   * Duration in seconds until the attack sound is played.
   * @default 1.7
   */
  duration_until_attack_sound?: number;
  /**
   * Height cap of the attack knockback's vertical delta.
   */
  knockback_height_cap?: number;
  /**
   * Horizontal strength of the attack's knockback applied to the attack target.
   */
  knockback_horizontal_strength?: number;
  /**
   * Vertical strength of the attack's knockback applied to the attack target.
   */
  knockback_vertical_strength?: number;
  /**
   * This multiplier modifies the attacking entity's speed when moving toward the target.
   * @default 1
   */
  speed_multiplier?: number;
};
