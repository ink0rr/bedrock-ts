import { Filters } from "../../shared/filter.js";

export type EntityBehaviorMoveAwayFromTargetComponent = {
  priority?: number;
  destination_position_range?: [number, number];
  destination_pos_spread_degrees?: number;
  movement_speed?: number;
  filters?: Filters;
};
