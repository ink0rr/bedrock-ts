export type Animations = {
  format_version: string;
  animations: Record<string, Animation>;
};

export type Animation = {
  anim_time_update?: string | number;
  animation_length?: number;
  loop?: boolean;
  loop_delay?: string | number;
  start_delay?: string | number;
  timeline?: Record<number, string[]>;
};
