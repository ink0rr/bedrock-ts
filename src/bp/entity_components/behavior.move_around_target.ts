import { Filter } from "../../shared/filter.js";

export type EntityBehaviorMoveAroundTargetComponent = {
  priority?: number;
  destination_position_range?: [number, number];
  destination_pos_spread_degrees?: number;
  movement_speed?: number;
  filters?: Filter;
};
