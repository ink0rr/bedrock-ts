import { ActionText } from "../../shared/literals/action_text.js";

/**
 * Allows dyes to be used on this entity to change its color.
 */
export type EntityIsDyeableComponent = {
  interact_text?: ActionText;
};
