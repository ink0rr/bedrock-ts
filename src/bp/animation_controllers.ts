import { StringOrRecord } from "../shared/string_or_record.js";

export type BehaviorAnimationControllers = {
  format_version: string;
  animation_controllers: Record<string, BehaviorAnimationController>;
};

export type BehaviorAnimationController = {
  initial_state?: string;
  states: Record<string, BehaviorAnimationControllerState>;
};

export type BehaviorAnimationControllerState = {
  animations?: StringOrRecord[];
  on_entry?: string[];
  on_exit?: string[];
  transitions?: Record<string, string>[];
};
