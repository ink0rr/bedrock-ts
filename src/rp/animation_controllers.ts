import { StringOrRecord } from "../shared/string_or_record.js";

export type ResourceAnimationControllers = {
  format_version: string;
  animation_controllers: Record<string, ResourceAnimationController>;
};

export type ResourceAnimationController = {
  initial_state?: string;
  states: Record<string, ResourceAnimationControllerState>;
};

export type ResourceAnimationControllerState = {
  animations?: StringOrRecord[];
  blend_transition?: number;
  blend_via_shortest_path?: boolean;
  on_entry?: string[];
  on_exit?: string[];
  particle_effects?: {
    bind_to_actor?: boolean;
    effect?: string;
    locator?: string;
    pre_effect_script?: string;
  }[];
  sound_effects?: {
    effect: string;
  }[];
  transitions?: Record<string, string>[];
  variables?: Record<
    string,
    {
      input?: string;
      remap_curve?: Record<string, string>;
    }
  >[];
};
