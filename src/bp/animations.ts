export type BehaviorAnimations = {
  format_version: string;
  animations: Record<string, BehaviorAnimation>;
};

export type BehaviorAnimation = {
  anim_time_update?: string | number;
  animation_length?: number;
  loop?: boolean;
  loop_delay?: string | number;
  start_delay?: string | number;
  timeline?: Record<number, string[]>;
};
