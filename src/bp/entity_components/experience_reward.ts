// auto generated
import { MoLang } from "../../shared/molang.js";

/**
 * Defines the experience dropped by the entity.
 */
export type EntityExperienceRewardComponent = {
  /**
   * A molang expression defining the amount of experience rewarded when this entity is successfully bred. An array of expressions adds each expression's result together for a final total.
   */
  on_bred?: MoLang;
  /**
   * A molang expression defining the amount of experience rewarded when this entity dies. An array of expressions adds each expression's result together for a final total.
   */
  on_death?: MoLang;
};
