// auto generated
import { Filters } from "../../shared/filter.js";
import { EntityEventTrigger } from "../entity_behavior/event.js";

export namespace EntityLeashableComponent {
  export type Preset = {
    /**
     * Conditions that must be met for this preset to be applied. These conditions are only evaluated upon leashing.
     */
    filter?: Filters;
    /**
     * Distance in blocks at which the leash stiffens, restricting movement.
     * @default 6
     */
    hard_distance?: number;
    /**
     * Distance in blocks at which the leash breaks.
     * @default 10
     */
    max_distance?: number;
    /**
     * Adjusts the rotation at which the entity reaches equilibrium, when 'spring_type' is set to 'dampened' or 'quad_dampened'.
     */
    rotation_adjustment?: number;
    /**
     * Distance in blocks at which the 'spring' effect starts acting to keep this entity close to the entity that leashed it.
     * @default 4
     */
    soft_distance?: number;
    /**
     * Defines the type of spring-like force that pulls the entity towards its leash holder.
     */
    spring_type?: "bouncy" | "dampened" | "quad_dampened";
  };
}
/**
 * Allows this entity to be leashed and defines the conditions and events for this entity when is leashed.
 */
export type EntityLeashableComponent = {
  /**
   * If true, players can cut both incoming and outgoing leashes by using shears on the entity.
   * @default true
   */
  can_be_cut?: boolean;
  /**
   * If true, players can leash this entity even if it is already leashed to another entity.
   * @default true
   */
  can_be_stolen?: boolean;
  /**
   * Event to call when this entity is leashed.
   */
  on_leash?: EntityEventTrigger;
  /**
   * Event to call when this entity is unleashed.
   */
  on_unleash?: EntityEventTrigger;
  /**
   * When set to true, 'on_unleash'does not trigger when the entity gets unleashed for other reasons such as being stolen or the leash breaking.
   */
  on_unleash_interact_only?: boolean;
  /**
   * Defines how this entity behaves when leashed to another entity. A preset is selected upon leashing and remains until the entity is leashed to something else. The first preset whose 'filter' conditions are met will be applied; if none match, a default configuration is used instead.
   */
  presets?: Array<EntityLeashableComponent.Preset>;
};
