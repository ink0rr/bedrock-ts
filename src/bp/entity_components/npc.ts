/**
 * Gives the entity the npc menu when interacted with.
 */
export type EntityNpcComponent = {
  npc_data?: {
    portrait_offsets?: {
      translate?: Array<number>;
      scale?: Array<number>;
    };
    picker_offsets?: {
      translate?: Array<number>;
      scale?: Array<number>;
    };
    skin_list?: Array<{
      variant?: number;
    }>;
  };
};
