// auto generated
import { EntityEventTrigger } from "../entity_behavior/event.js";

/**
 * The mob freezes and looks at the mob they are targeting.
 */
export type EntityBehaviorHoldGroundComponent = {
  priority?: number;
  /**
   * Whether to broadcast out the mob's target to other mobs of the same type.
   */
  broadcast?: boolean;
  /**
   * Range in blocks for how far to broadcast.
   */
  broadcast_range?: number;
  /**
   * Minimum distance the target must be for the mob to run this goal.
   * @default 10
   */
  min_radius?: number;
  /**
   * Event to run when target is within the radius. This event is broadcasted if broadcast is true.
   */
  within_radius_event?: EntityEventTrigger;
};
