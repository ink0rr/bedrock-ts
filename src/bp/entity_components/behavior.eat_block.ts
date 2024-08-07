import { BlockIdentifier } from "../../shared/literals/block_identifier.js";
import { EventTriggerFiltered } from "../../shared/event_trigger.js";
import { MoLang } from "../../shared/molang.js";

/**
 * Allows the entity to consume a block, replace the eaten block with another block, and trigger an event as a result.
 */
export type EntityBehaviorEatBlockComponent = {
  priority?: number;
  /**
   * A molang expression defining the success chance the entity has to consume a block.
   * @default 0.02
   */
  success_chance?: MoLang;
  /**
   * The amount of time (in seconds) it takes for the block to be eaten upon a successful eat attempt.
   * @default 1.8
   */
  time_until_eat?: number;
  /**
   * A collection of pairs of blocks; the first ('eat_block') is the block the entity should eat, the second ('replace_block') is the block that should replace the eaten block.
   */
  eat_and_replace_block_pairs?: Array<{
    eat_block?: BlockIdentifier;
    replace_block?: BlockIdentifier;
  }>;
  /**
   * the event to trigger when the block eating animation has completed.
   */
  on_eat?: EventTriggerFiltered;
};
