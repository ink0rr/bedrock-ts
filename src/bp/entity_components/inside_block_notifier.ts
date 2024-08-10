// auto generated
import { BlockState } from "../../shared/block_state.js";
import { BlockIdentifier } from "../../shared/literals/block_identifier.js";
import { EntityEventTrigger } from "../entity_behavior/event.js";

/**
 * Verifies whether the entity is inside any of the listed blocks.
 */
export type EntityInsideBlockNotifierComponent = {
  block_list?: Array<{
    block?: {
      name?: BlockIdentifier;
      states?: BlockState;
    };
    entered_block_event?: EntityEventTrigger;
    exited_block_event?: EntityEventTrigger;
  }>;
};
