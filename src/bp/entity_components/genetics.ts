// auto generated
import { EntityEventTrigger } from "../entity_behavior/event.js";

/**
 * Defines the way a mob's genes and alleles are passed on to it's offspring, and how those traits manifest in the child. Compatible parent genes are crossed together, the alleles are handed down from the parents to the child, and any matching genetic variants fire off JSON events to modify the child and express the traits.
 */
export type EntityGeneticsComponent = {
  /**
   * Chance that an allele will be replaced with a random one instead of the parent's allele during birth.
   * @default 0.03125
   */
  mutation_rate?: number;
  /**
   * The list of genes that this entity has and will cross with a partner during breeding.
   */
  genes?: Array<{
    /**
     * The name of the gene.
     */
    name?: string;
    /**
     * The range of positive integer allele values for this gene. Spawned mobs will have a random number in this range assigned to them.
     */
    allele_range?:
      | number
      | {
          /**
           * Lower bound of the allele values for this gene.
           */
          range_min?: number;
          /**
           * Upper bound of the allele values for this gene.
           */
          range_max?: number;
        };
    /**
     * The list of genetic variants for this gene. These check for particular allele combinations and fire events when all of them are satisfied.
     */
    genetic_variants?: Array<{
      /**
       * If this value is non-negative, compare the mob's main allele with this value for a match. Can also be a range of integers.
       * @default -1
       */
      main_allele?:
        | number
        | {
            range_min?: number;
            range_max?: number;
          };
      /**
       * If this value is non-negative, compare both the mob's main and hidden alleles with this value for a match with both. Can also be a range of integers.
       * @default -1
       */
      both_allele?:
        | number
        | {
            range_min?: number;
            range_max?: number;
          };
      /**
       * If this value is non-negative, compare the mob's hidden allele with this value for a match. Can also be a range of integers.
       * @default -1
       */
      hidden_allele?:
        | number
        | {
            range_min?: number;
            range_max?: number;
          };
      /**
       * If this value is non-negative, compare both the mob's main and hidden alleles with this value for a match with either. Can also be a range of integers.
       * @default -1
       */
      either_allele?:
        | number
        | {
            range_min?: number;
            range_max?: number;
          };
      /**
       * Event to run when this mob is created and matches the above allele conditions.
       */
      birth_event?: EntityEventTrigger;
    }>;
    /**
     * If this value is non-negative, overrides the chance for this gene that an allele will be replaced with a random one instead of the parent's allele during birth. Non-negative values greater than 1 will be the same as the value 1.
     * @default -1
     */
    mutation_rate?: number;
    /**
     * When this flag is set to true, the offspring never inherits hidden alleles of parents as main alleles and main as hidden. This allows to implement simple breeding logic easier.
     */
    use_simplified_breeding?: boolean;
  }>;
};
