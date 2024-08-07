import { BlockIdentifier } from "../../shared/literals/block_identifier.js";

/**
 * Defines what blocks this entity can breathe in and gives them the ability to suffocate.
 */
export type EntityBreathableComponent = {
  /**
   * List of blocks this entity can breathe in, in addition to the above.
   */
  breathe_blocks?: Array<BlockIdentifier>;
  /**
   * If true, this entity can breathe in water.
   */
  breathes_water?: boolean;
  /**
   * If true, this entity can breathe in lava.
   * @default true
   */
  breathes_lava?: boolean;
  /**
   * If true, this entity can breathe in air.
   * @default true
   */
  breathes_air?: boolean;
  /**
   * If true, this entity can breathe in solid blocks.
   */
  breathes_solids?: boolean;
  /**
   * If true, this entity will have visible bubbles while in water.
   * @default true
   */
  generates_bubbles?: boolean;
  /**
   * Time in seconds to recover breath to maximum.
   */
  inhale_time?: number;
  /**
   * Time in seconds between suffocation damage.
   * @default -20
   */
  suffocate_time?: number;
  /**
   * Time in seconds between suffocation damage.
   * @default -20
   */
  suffocateTime?: number;
  /**
   * Time in seconds the entity can hold its breath.
   * @default 15
   */
  total_supply?: number;
  /**
   * Time in seconds the entity can hold its breath.
   * @default 15
   */
  totalSupply?: number;
  /**
   * List of blocks this entity can't breathe in, in addition to the above.
   */
  non_breathe_blocks?: Array<BlockIdentifier>;
};
