// auto generated
import { DamageSource } from "../../shared/damage_source.js";
import { SoundEvent } from "../../shared/sound_event.js";
import { EntityEventEntityDamageSensorComponent } from "../entity_behavior/event.js";

export namespace EntityDamageSensorComponent {
  export type Trigger = {
    /**
     * Specifies filters for entity definitions and events.
     */
    on_damage?: EntityEventEntityDamageSensorComponent.Trigger;
    /**
     * Type of damage that triggers the events.
     * @default yes
     */
    cause?: DamageSource;
    /**
     * If true, the damage dealt to the entity will take away health from it, set to false to make the entity ignore that damage.
     * @default true
     */
    deals_damage?: boolean;
    /**
     * A multiplier that modifies the base damage from the damage cause. If deals_damage is true the multiplier can only reduce the damage the entity will take to a minimum of 1.
     * @default 1
     */
    damage_multiplier?: number;
    /**
     * Defines what sound to play, if any, when the on_damage filters are met.
     */
    on_damage_sound_event?: SoundEvent;
    /**
     * A modifier that adds to/removes from the base damage from the damage cause. It does not reduce damage to less than 0.
     */
    damage_modifier?: number;
  };
}
/**
 * Defines what events to call when this entity is damaged by specific entities or items.
 */
export type EntityDamageSensorComponent = {
  triggers?: Array<EntityDamageSensorComponent.Trigger> | EntityDamageSensorComponent.Trigger;
};
