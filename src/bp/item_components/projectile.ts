import { EntityIdentifier } from "../../shared/entity_identifier.js";

/**
 * Projectile item component. Projectile items shoot out, like an arrow. In format versions prior to 1.20.10, this component requires the 'Holiday Creator Features' experimental toggle.
 */
export type ItemProjectileComponent = {
  /**
   * Defines the time a projectile needs to charge in order to critically hit
   */
  minimum_critical_power?: number;
  /**
   * The entity to be fired as a projectile. If no namespace is specified, it is assumed to be minecraft
   */
  projectile_entity?: EntityIdentifier;
};
