import { EntityIdentifier } from "../../shared/entity_identifier.js";

export type EntityBehaviorFireAtTargetComponent = {
  priority?: number;
  projectile_def?: EntityIdentifier;
  attack_range?: [number, number];
  attack_cooldown?: number;
  pre_shoot_delay?: number;
  post_shoot_delay?: number;
  ranged_fov?: number;
  owner_anchor?: number;
  owner_offset?: [number, number, number];
  target_anchor?: number;
  target_offset?: [number, number, number];
};
