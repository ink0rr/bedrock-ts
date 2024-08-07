import { Filter } from "../../shared/filter.js";

export type EntityBehaviorJumpAroundTargetComponent = {
  priority?: number;
  jump_cooldown_duration?: number;
  jump_cooldown_when_hurt_duration?: number;
  last_hurt_duration?: number;
  prepare_jump_duration?: number;
  max_jump_velocity?: number;
  check_collision?: boolean;
  entity_bounding_box_scale?: number;
  line_of_sight_obstruction_height_ignore?: number;
  valid_distance_to_target?: [number, number];
  landing_position_spread_degrees?: number;
  landing_distance_from_target?: [number, number];
  required_vertical_space?: number;
  snap_to_surface_block_range?: number;
  jump_angles?: Array<number>;
  filters?: Filter;
};
