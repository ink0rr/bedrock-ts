import { EventTriggerFiltered } from "../../shared/event_trigger.js";
import { ItemIdentifier } from "../../shared/literals/item_identifier.js";
import { ItemTag } from "../../shared/literals/item_tag.js";

/**
 * Allows the Entity to be tamed by mounting it.
 */
export type EntityTamemountComponent = {
  /**
   * The amount the entity's temper will increase when mounted.
   * @default 5
   */
  attempt_temper_mod?: number;
  /**
   * The list of items that, if carried while interacting with the entity, will anger it.
   */
  auto_reject_items?: Array<{
    /**
     * Name of the item this entity dislikes and will cause it to get angry if used while untamed.
     */
    item?:
      | ItemIdentifier
      | {
          any_tag?: Array<ItemTag>;
        };
  }>;
  /**
   * The list of items that can be used to increase the entity's temper and speed up the taming process.
   */
  feed_items?: Array<{
    /**
     * Name of the item this entity likes and can be used to increase this entity's temper.
     */
    item?:
      | ItemIdentifier
      | {
          any_tag?: Array<ItemTag>;
        };
    /**
     * The amount of temper this entity gains when fed this item.
     */
    temper_mod?: number;
  }>;
  /**
   * The text that shows in the feeding interact button.
   */
  feed_text?: string;
  /**
   * The minimum value for the entity's random starting temper.
   */
  min_temper?: number;
  /**
   * The maximum value for the entity's random starting temper.
   * @default 100
   */
  max_temper?: number;
  /**
   * The text that shows in the riding interact button.
   */
  ride_text?: string;
  /**
   * Event that triggers when the entity becomes tamed.
   */
  tame_event?: EventTriggerFiltered;
};
