// auto generated
import { EntityIdentifier } from "../../shared/literals/entity_identifier.js";
import { PotionId } from "../../shared/potion_id.js";
import { SoundEvent } from "../../shared/sound_event.js";

/**
 * Defines the entity's ranged attack behavior. The 'minecraft:behavior.ranged_attack' goal uses this component to determine which projectiles to shoot.
 */
export type EntityShooterComponent = {
  /**
   * Actor definition to use as the default projectile for the ranged attack. The actor definition must have the projectile component to be able to be shot as a projectile.
   */
  def?: EntityIdentifier;
  /**
   * ID of the Potion effect for the default projectile to be applied on hit.
   */
  aux_val?: PotionId;
  /**
   * Sets whether the projectiles being used are flagged as magic. If set, the ranged attack goal will not be used at the same time as other magic goals, such as minecraft:behavior.drink_potion.
   */
  magic?: boolean;
  /**
   * Velocity in which the projectiles will be shot at. A power of 0 will be overwritten by the default projectile throw power.
   */
  power?: number;
  /**
   * List of projectiles that can be used by the shooter. Projectiles are evaluated in the order of the list; After a projectile is chosen, the rest of the list is ignored.
   */
  projectiles?: Array<EntityIdentifier>;
  /**
   * Sound that is played when the shooter shoots a projectile.
   */
  sound?: SoundEvent;
};
