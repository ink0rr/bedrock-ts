import { LiteralUnion } from "./literal_union.js";
import { ItemIdentifier } from "./literals/item_identifier.js";

export type ItemDescriptor =
  | ItemIdentifier
  | {
      tags: LiteralUnion<"q.any_tag" | "q.all_tags">;
    };
