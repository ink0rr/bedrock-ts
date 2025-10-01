export type ClientAnimations = {
  format_version: string;
  animations: Record<string, ClientAnimation>;
};

export type ClientAnimation = {
  anim_time_update?: string | number;
  animation_length?: number;
  blend_weight?: number;
  bones?: Record<
    string,
    {
      relative_to?: {
        rotation: "entity";
      };
      position?:
        | [number, number, number]
        | Record<
            number,
            | [number, number, number]
            | {
                pre?: [number, number, number];
                post?: [number, number, number];
                lerp_mode?: "linear" | "catmullrom";
              }
          >;
      rotation?:
        | [number, number, number]
        | Record<
            number,
            | [number, number, number]
            | {
                pre?: [number, number, number];
                post?: [number, number, number];
                lerp_mode?: "linear" | "catmullrom";
              }
          >;
      scale?:
        | number
        | Record<
            number,
            | [number, number, number]
            | {
                pre?: [number, number, number];
                post?: [number, number, number];
                lerp_mode?: "linear" | "catmullrom";
              }
          >;
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
