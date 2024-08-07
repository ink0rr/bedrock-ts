export type ResourceAnimations = {
  format_version: string;
  animations: Record<string, ResourceAnimation>;
};

export type ResourceAnimation = {
  anim_time_update?: string | number;
  animation_length?: number;
  blend_weight?: number;
  bones?: Record<
    string,
    {
      rotation?: Record<number, [number, number, number]>;
    }
  >;
  loop?: boolean;
  loop_delay?: string | number;
  override_previous_animation?: boolean;
  particle_effects?: Record<
    number,
    {
      bind_to_actor?: boolean;
      effect?: string;
      locator?: string;
      pre_effect_script?: string;
    }
  >;
  sound_effects?: Record<
    number,
    {
      effect: string;
    }
  >;
  start_delay?: string | number;
};
