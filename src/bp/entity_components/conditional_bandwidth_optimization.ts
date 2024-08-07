import { Filter } from "../../shared/filter.js";

export type ConditionalValues = {
  /**
   * In relation to the optimization value, determines the maximum ticks spatial update packets can be not sent.
   */
  max_dropped_ticks?: number;
  /**
   * The maximum distance considered during bandwidth optimizations. Any value below the max is interpolated to find optimization, and any value greater than or equal to this max results in max optimization.
   */
  max_optimized_distance?: number;
  /**
   * When set to true, smaller motion packets will be sent during drop packet intervals, resulting in the same amount of packets being sent as without optimizations but with much less data being sent. This should be used when actors are travelling very quickly or teleporting to prevent visual oddities.
   */
  use_motion_prediction_hints?: boolean;
  conditional_values?: Array<Filter>;
};
export type DefaultValues = {
  /**
   * In relation to the optimization value, determines the maximum ticks spatial update packets can be not sent.
   */
  max_dropped_ticks?: number;
  /**
   * The maximum distance considered during bandwidth optimizations. Any value below the max is interpolated to find optimization, and any value greater than or equal to this max results in max optimization.
   */
  max_optimized_distance?: number;
  /**
   * The maximum distance considered during bandwidth optimizations. Any value below the max is interpolated to find optimization, and any value greater than or equal to this max results in max optimization.
   */
  use_motion_prediction_hints?: boolean;
};
/**
 * Defines the Conditional Spatial Update Bandwidth Optimizations of this entity.
 */
export type EntityConditionalBandwidthOptimizationComponent = {
  /**
   * The object containing the conditional bandwidth optimization values.
   */
  conditional_values?: Array<ConditionalValues> | ConditionalValues;
  /**
   * The object containing the default bandwidth optimization values.
   */
  default_values?: Array<DefaultValues> | DefaultValues;
};
