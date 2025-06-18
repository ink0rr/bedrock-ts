// auto generated
import { ActionText } from "../../shared/literals/action_text.js";
import { MoLang } from "../../shared/molang.js";
import { TypeFamily } from "../../shared/type_family.js";
import { EntityEventIdentifier } from "../entity_behavior/event.js";

export namespace EntityRideableComponent {
  export type Seat = {
    /**
     * Sets springiness to the camera movement when the camera moves back to its radius after being pushed closer to the player by and obstacle. A higher value means a stiffer spring.
     */
    camera_relax_distance_smoothing?: number;
    /**
     * Angle in degrees that a rider is allowed to rotate while riding this entity. Omit this property for no limit.
     * @default 181
     */
    lock_rider_rotation?: number;
    /**
     * Defines the maximum number of riders that can be riding this entity for this seat to be valid.
     */
    max_rider_count?: number;
    /**
     * Defines the minimum number of riders that need to be riding this entity before this seat can be used.
     */
    min_rider_count?: number;
    /**
     * Position of this seat relative to this entity's position.
     */
    position?: Array<number>;
    /**
     * Offset to rotate riders by.
     */
    rotate_rider_by?: number | MoLang;
    /**
     * Sets a different camera radius when in third person or third person front camera.
     * @default 1
     */
    third_person_camera_radius?: number;
  };
}
/**
 * Determines whether this entity can be ridden. Allows specifying the different seat positions and quantity.
 */
export type EntityRideableComponent = {
  /**
   * The seat that designates the driver of the entity.
   */
  controlling_seat?: number;
  /**
   * If true, this entity can't be interacted with if the entity interacting with it is crouching.
   * @default true
   */
  crouching_skip_interact?: boolean;
  /**
   * Defines where riders are placed when dismounting this entity.
   */
  dismount_mode?: "default" | "on_top_center";
  /**
   * List of entities that can ride this entity.
   */
  family_types?: Array<TypeFamily>;
  /**
   * The text to display when the player can interact with the entity when playing with Touch-screen controls.
   */
  interact_text?: ActionText;
  /**
   * Event to execute on the owner entity when an entity starts riding it.
   */
  on_rider_enter_event?: EntityEventIdentifier;
  /**
   * Event to execute on the owner entity when an entity stops riding it.
   */
  on_rider_exit_event?: EntityEventIdentifier;
  /**
   * The max width a mob can be to be a passenger. A value of 0 ignores this parameter.
   */
  passenger_max_width?: number;
  /**
   * If true, this entity will pull in entities that are in the correct family_types into any available seats.
   */
  pull_in_entities?: boolean;
  /**
   * If true, this entity will be picked when looked at by the rider.
   */
  rider_can_interact?: boolean;
  /**
   * The number of entities that can ride this entity at the same time.
   * @default 1
   */
  seat_count?: number;
  seats?: Array<EntityRideableComponent.Seat> | EntityRideableComponent.Seat;
};
