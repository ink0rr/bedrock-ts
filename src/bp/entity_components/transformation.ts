import { BlockIdentifier } from "../../shared/literals/block_identifier.js";
import { EntityIdentifier } from "../../shared/literals/entity_identifier.js";
import { SoundEvent } from "../../shared/sound_event.js";

/**
 * Defines an entity's transformation from the current definition into another
 */
export type EntityTransformationComponent = {
  /**
   * Entity Definition that this entity will transform into.
   */
  into?: EntityIdentifier;
  /**
   * List of components to add to the entity after the transformation.
   */
  add?: {
    component_groups?: Array<string>;
  };
  /**
   * Sound to play when the transformation starts.
   */
  begin_transform_sound?: SoundEvent;
  /**
   * Sound to play when the entity is done transforming.
   */
  transformation_sound?: SoundEvent;
  /**
   * Cause the entity to drop all equipment upon transformation.
   */
  drop_equipment?: boolean;
  /**
   * Cause the entity to keep equipment after going through transformation.
   */
  preserve_equipment?: boolean;
  /**
   * Cause the entity to drop all items in inventory upon transformation.
   */
  drop_inventory?: boolean;
  /**
   * If this entity is owned by another entity, it should remain owned after transformation.
   */
  keep_owner?: boolean;
  /**
   * If this entity has trades and has leveled up, it should maintain that level after transformation.
   */
  keep_level?: boolean;
  /**
   * Defines the properties of the delay for the transformation.
   */
  delay?:
    | {
        /**
         * Time in seconds before the entity transforms.
         */
        value?: number;
        /**
         * Chance that the entity will look for nearby blocks that can speed up the transformation. Value must be between 0.0 and 1.0.
         */
        block_assist_chance?: number;
        /**
         * Chance that, once a block is found, will help speed up the transformation.
         */
        block_chance?: number;
        /**
         * Maximum number of blocks the entity will look for to aid in the transformation. If not defined or set to 0, it will be set to the block radius.
         */
        block_max?: number;
        /**
         * Distance in Blocks that the entity will search for blocks that can help the transformation.
         */
        block_radius?: number;
        keep_owner?: boolean;
        /**
         * List of blocks that can help the transformation of this entity.
         */
        block_types?: Array<BlockIdentifier>;
      }
    | number;
};
