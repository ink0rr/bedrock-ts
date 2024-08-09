import { Filter } from "../../shared/filter.js";
import { BlockIdentifier } from "../../shared/literals/block_identifier.js";
import { EntityIdentifier } from "../../shared/literals/entity_identifier.js";
import { ItemIdentifier } from "../../shared/literals/item_identifier.js";
import { ItemTag } from "../../shared/literals/item_tag.js";
import { EntityEventTrigger } from "../entity_behavior/event.js";
import { EntityComponents } from "./index.js";

/**
 * Defines the way an entity can get into the 'love' state.
 */
export type EntityBreedableComponent = {
  /**
   * If true, entities can breed while sitting.
   */
  allow_sitting?: boolean;
  /**
   * If true, the entities will blend their attributes in the offspring after they breed.
   * @default true
   */
  blend_attributes?: boolean;
  /**
   * Time in seconds before the Entity can breed again.
   * @default 60
   */
  breed_cooldown?: number;
  /**
   * The filters to run when attempting to fall in love.
   */
  love_filters?: Filter;
  /**
   * The list of items that can be used to get the entity into the 'love' state.
   */
  breed_items?:
    | Array<
        | ItemIdentifier
        | {
            any_tag?: Array<ItemTag>;
          }
      >
    | ItemIdentifier;
  /**
   * The list of entity definitions that this entity can breed with.
   */
  breeds_with?:
    | {
        /**
         * The entity definition of this entity's mate.
         */
        mate_type?: EntityIdentifier;
        /**
         * The entity definition of this entity's babies.
         */
        baby_type?: EntityIdentifier;
        /**
         * Event to run when this entity breeds.
         */
        breed_event?: EntityEventTrigger;
      }
    | Array<{
        /**
         * The entity definition of this entity's mate.
         */
        mate_type?: EntityIdentifier;
        /**
         * The entity definition of this entity's babies.
         */
        baby_type?: EntityIdentifier;
        /**
         * Event to run when this entity breeds.
         */
        breed_event?: EntityEventTrigger;
      }>;
  /**
   * If true, the entity will become pregnant instead of spawning a baby.
   */
  causes_pregnancy?: boolean;
  /**
   * The list of nearby block requirements to get the entity into the 'love' state.
   */
  environment_requirements?:
    | Array<{
        /**
         * The block types required nearby for the entity to breed.
         */
        blocks?: BlockIdentifier;
        /**
         * The number of the required block types nearby for the entity to breed.
         */
        count?: number;
        /**
         * How many blocks radius from the mob's center to search in for the required blocks. Bounded between 0 and 16.
         */
        radius?: number;
      }>
    | {
        /**
         * The block types required nearby for the entity to breed.
         */
        blocks?: BlockIdentifier;
        /**
         * The number of the required block types nearby for the entity to breed.
         */
        count?: number;
        /**
         * How many blocks radius from the mob's center to search in for the required blocks. Bounded between 0 and 16.
         */
        radius?: number;
      };
  /**
   * Chance that up to 16 babies will spawn between 0.0 and 1.0, where 1.0 is 100%.
   */
  extra_baby_chance?: number;
  /**
   * If true, the babies will be automatically tamed if its parents are.
   * @default true
   */
  inherit_tamed?: boolean;
  /**
   * Determines how likely the babies are to NOT inherit one of their parent's variances. Values are between 0.0 and 1.0, with a higher number meaning more likely to mutate.
   */
  mutation_factor?: {
    /**
     * The percentage chance of a mutation on the entity's color.
     */
    color?: number;
    /**
     * The percentage chance of a mutation on the entity's extra variant type.
     */
    extra_variant?: number;
    /**
     * The percentage chance of a mutation on the entity's variant type.
     */
    variant?: number;
  };
  /**
   * Determines how likely the baby of parents with the same variant will deny that variant and take a random variant within the given range instead.
   */
  deny_parents_variant?: {
    /**
     * The percentage chance of denying the parents' variant.
     */
    chance?: number;
    /**
     * The inclusive minimum of the variant range.
     */
    min_variant?: number;
    /**
     * The inclusive maximum of the variant range.
     */
    max_variant?: number;
  };
  /**
   * If true, the entities need to be tamed first before they can breed.
   * @default true
   */
  require_tame?: boolean;
  /**
   * If true, the entity needs to be at full health before it can breed.
   */
  require_full_health?: boolean;
  /**
   * The breed item used will transform to this item upon successful interaction.
   */
  transform_to_item?: ItemIdentifier;
  /**
   * Strategy used for mutating variants and extra variants for offspring.
   * @default none
   */
  mutation_strategy?: "random" | "none";
  /**
   * Range used to determine random extra variant.
   */
  random_extra_variant_mutation_interval?: Array<number>;
  /**
   * Range used to determine random variant.
   */
  random_variant_mutation_interval?: Array<number>;
  /**
   * List of attributes that should benefit from parent centric attribute blending. For example, horses blend their health, movement, and jump_strength in their offspring.
   */
  parent_centric_attribute_blending?: Array<keyof EntityComponents>;
};
