import { BlockIdentifier } from "../../shared/literals/block_identifier.js";
import { BlockState } from "../../shared/block_state.js";
import { ItemIdentifier } from "../../shared/literals/item_identifier.js";

export type EntityBehaviorNavigation = {
  /**
   * Tells the pathfinder whether or not it can walk on the ground underwater
   */
  is_amphibious?: boolean;
  /**
   * Tells the pathfinder to avoid portals (like nether portals) when finding a path.
   */
  avoid_portals?: boolean;
  /**
   * Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.
   */
  avoid_sun?: boolean;
  /**
   * Tells the pathfinder to avoid water when creating a path.
   */
  avoid_water?: boolean;
  /**
   * Tells the pathfinder to avoid blocks that cause damage when finding a path.
   */
  avoid_damage_blocks?: boolean;
  /**
   * Tells the pathfinder that it can path through a closed door and break it.
   */
  can_break_doors?: boolean;
  /**
   * Tells the pathfinder that it can path through a closed door assuming the AI will open the door.
   */
  can_open_doors?: boolean;
  /**
   * Whether a path can be created through a door.
   * @default true
   */
  can_pass_doors?: boolean;
  /**
   * Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.
   */
  can_open_iron_doors?: boolean;
  /**
   * Tells the pathfinder whether or not it can travel on the surface of the water.
   */
  can_path_over_water?: boolean;
  /**
   * Tells the pathfinder whether or not it can travel on the surface of the lava.
   */
  can_path_over_lava?: boolean;
  /**
   * Tells the pathfinder that it can start pathing when in the air.
   */
  can_path_from_air?: boolean;
  /**
   * Tells the pathfinder whether or not it will be pulled down by gravity while in water.
   * @default true
   */
  can_sink?: boolean;
  /**
   * Tells the pathfinder whether or not it can travel in lava like walking on ground.
   */
  can_walk_in_lava?: boolean;
  /**
   * Tells the pathfinder which blocks to avoid when creating a path.
   */
  blocks_to_avoid?: Array<
    | ItemIdentifier
    | {
        name?: BlockIdentifier;
        states?: BlockState;
      }
    | {
        tags?: string | "query.any_tag()" | "query.all_tags()";
      }
  >;
  /**
   * Tells the pathfinder whether or not it can jump out of water (like a dolphin).
   */
  can_breach?: boolean;
  /**
   * Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path.
   */
  can_swim?: boolean;
  /**
   * Tells the pathfinder whether or not it can jump up blocks.
   * @default true
   */
  can_jump?: boolean;
  /**
   * Tells the pathfinder whether or not it can walk on the ground outside water.
   * @default true
   */
  can_walk?: boolean;
  can_float?: boolean;
};
