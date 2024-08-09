import { EventTrigger } from "../../shared/event_trigger.js";

/**
 * Triggers based on rail conditions
 */
export type EntityRailSensorComponent = {
  /**
   * If true, on tick this entity will trigger its on_deactivate behavior.
   */
  check_block_types?: boolean;
  /**
   * If true, this entity will eject all of its riders when it passes over an activated rail.
   * @default true
   */
  eject_on_activate?: boolean;
  /**
   * If true, this entity will eject all of its riders when it passes over a deactivated rail.
   */
  eject_on_deactivate?: boolean;
  /**
   * Event to call when the rail is activated.
   */
  on_activate?: EventTrigger;
  /**
   * Event to call when the rail is deactivated.
   */
  on_deactivate?: EventTrigger;
  /**
   * If true, command blocks will start ticking when passing over an activated rail.
   * @default true
   */
  tick_command_block_on_activate?: boolean;
  /**
   * If true, command blocks will start ticking when passing over an activated rail.
   */
  tick_command_block_on_deactivate?: boolean;
};
