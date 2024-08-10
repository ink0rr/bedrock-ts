// auto generated
import { Filter } from "../../shared/filter.js";
import { ItemIdentifier } from "../../shared/literals/item_identifier.js";
import { ItemTag } from "../../shared/literals/item_tag.js";
import { SpellEffects } from "../../shared/spell_effects.js";

/**
 * Defines the interactions with this entity for healing it.
 */
export type EntityHealableComponent = {
  /**
   * Determines if item can be used regardless of entity being at full health.
   */
  force_use?: boolean;
  /**
   * The filter group that defines the conditions for using this item to heal the entity.
   */
  filters?: Filter;
  /**
   * The array of items that can be used to heal this entity.
   */
  items?: Array<{
    /**
     * Item identifier that can be used to heal this entity.
     */
    item?:
      | ItemIdentifier
      | {
          any_tag?: Array<ItemTag>;
        };
    /**
     * The amount of health this entity gains when fed this item.
     * @default 1
     */
    heal_amount?: number;
    filters?: Filter;
    effects?: Array<{
      name?: SpellEffects;
      chance?: number;
      duration?: number;
      amplifier?: number;
    }>;
  }>;
};
