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
     * Distance in blocks at which the 'spring' effect starts acting to keep this entity close to the entity that leashed it.
     * @default 4
     */
    soft_distance?: number;
  };
}
/**
 * Allows this entity to be leashed and defines the conditions and events for this entity when is leashed.
 */
export type EntityLeashableComponent = {
  /**
   * Event to call when this entity is unleashed.
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
