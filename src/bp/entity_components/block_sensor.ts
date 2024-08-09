import { EventTrigger } from "../../shared/event_trigger.js";
import { Filter } from "../../shared/filter.js";
import { BlockIdentifier } from "../../shared/literals/block_identifier.js";

/**
 * Fires off a specified event when a block in the block list is broken within the sensor range.
 */
export type EntityBlockSensorComponent = {
  sensor_radius?: number;
  on_break?: Array<{
    block_list?: Array<BlockIdentifier>;
    on_block_broken?: EventTrigger;
  }>;
  /**
   * List of sources that break the block to listen for. If none are specified, all block breaks will be detected.
   */
  sources?: Array<Filter>;
};
