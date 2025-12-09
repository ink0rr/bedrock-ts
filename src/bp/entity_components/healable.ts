// auto generated
import { Filters } from "../../shared/filter.js";
import { ItemDescriptor } from "../../shared/item_descriptor.js";
import { ItemIdentifier } from "../../shared/literals/item_identifier.js";
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
  filters?: Filters;
  /**
   * The array of items that can be used to heal this entity.
   */
  items?: Array<{
    /**
     * Item identifier that can be used to heal this entity.
     */
    item?: ItemDescriptor;
    /**
     * The amount of health this entity gains when fed this item.
     * @default 1
     */
    heal_amount?: number;
    filters?: Filters;
    effects?: Array<{
      name?: SpellEffects;
      chance?: number;
      duration?: "infinite" | number;
      amplifier?: number;
    }>;
    result_item?: ItemIdentifier;
  }>;
};
