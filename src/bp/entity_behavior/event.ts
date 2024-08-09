import { LiteralUnion } from "../../shared/literal_union.js";

export type EntityEventIdentifier = LiteralUnion<
  | "minecraft:entity_born"
  | "minecraft:entity_spawned"
  | "minecraft:entity_transformed"
  | "minecraft:on_prime"
>;
