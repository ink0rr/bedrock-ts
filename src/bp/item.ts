import { CreativeCategory } from "../shared/creative_category.js";
import { ItemGroup } from "../shared/item_group.js";
import { LiteralUnion } from "../shared/literal_union.js";
import { ItemComponents } from "./item_components/index.js";

export type Item = {
  format_version: LiteralUnion<"1.21.80">;
  "minecraft:item": {
    description: {
      identifier: string;
      menu_category?: {
        category?: CreativeCategory;
        group?: ItemGroup;
        is_hidden_in_commands?: boolean;
      };
    };
    components?: ItemComponents;
  };
};
