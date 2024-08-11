import { StringOrRecord } from "../shared/string_or_record.js";

export type AnimationControllers = {
  format_version: string;
  animation_controllers: Record<string, AnimationController>;
};

export type AnimationController = {
  initial_state?: string;
  states: Record<string, AnimationControllerState>;
};

export type AnimationControllerState = {
  animations?: StringOrRecord[];
  on_entry?: string[];
  on_exit?: string[];
  transitions?: Record<string, string>[];
};
