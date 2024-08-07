import { BlockState } from "../../shared/block_state.js";
import { EventTriggerFiltered } from "../../shared/event_trigger.js";
import { BlockIdentifier } from "../../shared/literals/block_identifier.js";

/**
 * Verifies whether the entity is inside any of the listed blocks.
 */
export type EntityInsideBlockNotifierComponent = {
  block_list?: Array<{
    block?: {
      name?: BlockIdentifier;
      states?: BlockState;
    };
    entered_block_event?: EventTriggerFiltered;
    exited_block_event?: EventTriggerFiltered;
  }>;
};
