import { ActionText } from "../../shared/action_text.js";
import { Family } from "../../shared/family.js";
import { MoLang } from "../../shared/molang.js";

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
   * List of entities that can ride this entity.
   */
  family_types?: Array<Family>;
  /**
   * The text to display when the player can interact with the entity when playing with Touch-screen controls.
   */
  interact_text?: ActionText;
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
  seats?:
    | Array<{
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
      }>
    | {
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
      };
};
