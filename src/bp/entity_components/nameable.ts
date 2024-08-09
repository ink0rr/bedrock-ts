import { EventTrigger } from "../../shared/event_trigger.js";

/**
 * Allows this entity to be named (e.g. using a name tag).
 */
export type EntityNameableComponent = {
  /**
   * If true, this entity can be renamed with name tags.
   * @default true
   */
  allow_name_tag_renaming?: boolean;
  /**
   * If true, the name will always be shown.
   */
  always_show?: boolean;
  /**
   * Trigger to run when the entity gets named.
   */
  default_trigger?: EventTrigger;
  /**
   * Describes the special names for this entity and the events to call when the entity acquires those names.
   */
  name_actions?: Array<{
    /**
     * List of special names that will cause the events defined in 'on_named' to fire.
     */
    name_filter?: string;
    /**
     * Event to be called when this entity acquires the name specified in 'name_filter'.
     */
    on_named?: EventTrigger;
  }>;
};
