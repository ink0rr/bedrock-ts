import { CreativeCategory } from "../shared/creative_category.js";
import { ItemIdentifier } from "../shared/index.js";
import { LiteralUnion } from "../shared/literal_union.js";

export type ItemCatalogs = {
  format_version: LiteralUnion<"1.21.60">;
  "minecraft:crafting_items_catalog": {
    categories: ItemCatalogs.ItemCatalog[];
  };
};

export namespace ItemCatalogs {
  export type ItemCatalog = {
    category_name: CreativeCategory;
    groups: ItemCatalogGroup[];
  };
  export type ItemCatalogGroup = {
    group_identifier?: {
      icon: ItemIdentifier;
      name: string;
    };
    items: ItemIdentifier[];
  };
}
