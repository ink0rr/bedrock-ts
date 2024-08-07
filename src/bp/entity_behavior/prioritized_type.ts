import { Filter } from "../../shared/filter.js";

export type EntityBehaviorPrioritizedType = {
  priority?: number;
  /**
   * The amount of time in seconds that the mob has to wait before selecting a target of the same type again
   */
  cooldown?: number;
  /**
   * Conditions that make this entry in the list valid.
   */
  filters?: Filter;
  /**
   * Maximum distance this mob can be away to be a valid choice.
   * @default 16
   */
  maxDist?: number;
  /**
   * If true, the mob has to be visible to be a valid choice.
   */
  mustSee?: boolean;
  /**
   * Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more.
   * @default 3
   */
  mustSeeForgetDuration?: number;
  /**
   * Multiplier for the running speed. A value of 1.0 means the speed is unchanged.
   * @default 1
   */
  sprintSpeedMultiplier?: number;
  /**
   * Multiplier for the walking speed. A value of 1.0 means the speed is unchanged.
   * @default 1
   */
  walkSpeedMultiplier?: number;
  /**
   * If true, the mob will stop being targeted if it stops meeting any conditions.
   */
  reevaluateDescription?: boolean;
};
