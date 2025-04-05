import path from "node:path/posix";
import { readJson, writeFile } from "../util/fs";
import { info, warning } from "../util/log";
import { RefData, Schema, SchemaParser } from "../util/schema_parser";
import { pascalCase } from "../util/util";

const refParserEntityMap = new Map<string, RefData>([
  [
    "entity_identifiers",
    {
      type: "EntityIdentifier",
      import: 'import { EntityIdentifier } from "../../shared/literals/entity_identifier.js";',
    },
  ],
  [
    "item_identifiers",
    {
      type: "ItemIdentifier",
      import: 'import { ItemIdentifier } from "../../shared/literals/item_identifier.js";',
    },
  ],
  [
    "block_identifiers",
    {
      type: "BlockIdentifier",
      import: 'import { BlockIdentifier } from "../../shared/literals/block_identifier.js";',
    },
  ],
  [
    "eventDefinition",
    {
      type: "EntityEventTrigger",
      import: 'import { EntityEventTrigger } from "../entity_behavior/event.js";',
    },
  ],
  [
    "family",
    {
      type: "TypeFamily",
      import: 'import { TypeFamily } from "../../shared/type_family.js";',
    },
  ],
  [
    "filter",
    {
      type: "Filters",
      import: 'import { Filters } from "../../shared/filter.js";',
    },
  ],
  [
    "soundEvent",
    {
      type: "SoundEvent",
      import: 'import { SoundEvent } from "../../shared/sound_event.js";',
    },
  ],
  [
    "damageType",
    {
      type: "DamageSource",
      import: 'import { DamageSource } from "../../shared/damage_source.js";',
    },
  ],
  [
    "effectName",
    {
      type: "SpellEffects",
      import: 'import { SpellEffects } from "../../shared/spell_effects.js";',
    },
  ],
  [
    "effectDefinition",
    {
      type: "SpellEffectDefinition",
      import: 'import { SpellEffectDefinition } from "../entity_behavior/spell_effect.js";',
    },
  ],
  [
    "actionText",
    {
      type: "ActionText",
      import: 'import { ActionText } from "../../shared/literals/action_text.js";',
    },
  ],
  [
    "slotType",
    {
      type: "Slot",
      import: 'import { Slot } from "../../shared/slot.js";',
    },
  ],
  [
    "inventoryType",
    {
      type: "ContainerType",
      import: 'import { ContainerType } from "../../shared/container_type.js";',
    },
  ],
  [
    "potionIds",
    {
      type: "PotionId",
      import: 'import { PotionId } from "../../shared/potion_id.js";',
    },
  ],
  [
    "trade_table_paths",
    {
      type: "TradeTablePath",
      import: 'import { TradeTablePath } from "../../shared/literals/trade_table_path.js";',
    },
  ],
  [
    "loot_table_paths",
    {
      type: "LootTablePath",
      import: 'import { LootTablePath } from "../../shared/literals/loot_table_path.js";',
    },
  ],
  [
    "blockState",
    {
      type: "BlockState",
      import: 'import { BlockState } from "../../shared/block_state.js";',
    },
  ],
  [
    "gameDifficulty",
    {
      type: "Difficulty",
      import: 'import { Difficulty } from "../../shared/difficulty.js";',
    },
  ],
  [
    "subject",
    {
      type: "FilterSubject",
      import: 'import { FilterSubject } from "../../shared/filter.js";',
    },
  ],
  [
    "item_tags",
    {
      type: "ItemTag",
      import: 'import { ItemTag } from "../../shared/literals/item_tag.js";',
    },
  ],
  [
    "entityType",
    {
      type: "EntityBehaviorType",
      import: 'import { EntityBehaviorType } from "../entity_behavior/type.js";',
    },
  ],
  [
    "prioritizedEntityType",
    {
      type: "EntityBehaviorPrioritizedType",
      import:
        'import { EntityBehaviorPrioritizedType } from "../entity_behavior/prioritized_type.js";',
    },
  ],
  [
    "componentsList",
    {
      type: "keyof EntityComponents",
      import: 'import { EntityComponents } from "./index.js";',
    },
  ],
  [
    "embedded",
    {
      type: "MoLang",
      import: 'import { MoLang } from "../../shared/molang.js";',
    },
  ],
  [
    "hexColor",
    {
      type: "HexColor",
      import: 'import { HexColor } from "../../shared/hex_color.js";',
    },
  ],
  [
    "eventEnum",
    {
      type: "EntityEventIdentifier",
      import: 'import { EntityEventIdentifier } from "../entity_behavior/event.js";',
    },
  ],
  [
    "particleDefinition",
    {
      type: "EntityBehaviorParticleDefinition",
      import: 'import { EntityBehaviorParticleDefinition } from "../entity_behavior/particle.js";',
    },
  ],
  [
    "particleName",
    {
      type: "LegacyParticle",
      import: 'import { LegacyParticle } from "../../shared/literals/legacy_particle.js";',
    },
  ],
  [
    "navigation",
    {
      type: "EntityBehaviorNavigation",
      import: 'import { EntityBehaviorNavigation } from "../entity_behavior/navigation.js";',
    },
  ],
  [
    "geometry",
    {
      type: "GeometryIdentifier",
      import: 'import { GeometryIdentifier } from "../../shared/literals/geometry_identifier.js";',
    },
  ],
  [
    "particle_identifiers",
    {
      type: "ParticleIdentifier",
      import: 'import { ParticleIdentifier } from "../../shared/literals/particle_identifier.js";',
    },
  ],
  [
    "soundDefinition",
    {
      type: "SoundDefinitionIdentifier",
      import:
        'import { SoundDefinitionIdentifier } from "../../shared/literals/sound_definition_identifier.js";',
    },
  ],
  [
    "itemTexture",
    {
      type: "ItemIcon",
      import: 'import { ItemIcon } from "../../shared/literals/item_icon.js";',
    },
  ],
  [
    "minecraftColor",
    {
      type: "MinecraftColor",
      import: 'import { MinecraftColor } from "../../shared/literals/minecraft_color.js";',
    },
  ],
  [
    "itemWearableType",
    {
      type: "WearableSlot",
      import: 'import { WearableSlot } from "../../shared/slot.js";',
    },
  ],
  [
    "terrainTexture",
    {
      type: "TerrainTextureIdentifier",
      import:
        'import { TerrainTextureIdentifier } from "../../shared/literals/terrain_texture_identifier.js";',
    },
  ],
  [
    "block_tags",
    {
      type: "BlockTag",
      import: 'import { BlockTag } from "../../shared/literals/block_tag.js";',
    },
  ],
  [
    "material_instances",
    {
      type: "Record<string, BlockMaterialInstancesComponent>",
      import: 'import { BlockMaterialInstancesComponent } from "./material_instances.js";',
    },
  ],
  [
    "itemDescriptor",
    {
      type: "ItemDescriptor",
      import: 'import { ItemDescriptor } from "../../shared/item_descriptor.js";',
    },
  ],
  [
    "effectDuration",
    {
      type: '"infinite" | number',
    },
  ],
]);
async function refParserDefault(str: string): Promise<RefData | string> {
  const filename = path.basename(str, ".json");
  const value = refParserEntityMap.get(filename);
  if (value) {
    return value;
  }
  switch (filename) {
    case "degree":
    case "behaviorPriority":
      return "number";
    case "componentGroupEnum":
    case "customComponentEnum":
    case "propertyEnum":
      return "string";
  }
  warning("Unknown ref:", filename);
  return "string";
}

const schemaParser = new SchemaParser();
type Parsed = {
  filepath: string;
  typeName: string;
};
export type ParseComponentSchemasArg = {
  dirpath: string;
  dest: string;
  typePrefix?: string;
  typeSuffix?: string;
  refParser?: (str: string) => Promise<RefData | string>;
};
export async function parseComponentSchemas({
  dest,
  dirpath,
  typePrefix = "",
  typeSuffix = "",
  refParser = refParserDefault,
}: ParseComponentSchemasArg) {
  const filepath = path.join(
    "temp",
    "editor-packages-main",
    "packages",
    "minecraftBedrock",
    "schema",
    dirpath,
    "_main.json",
  );
  const json = await readJson<Schema>(filepath, { jsonc: true });
  const parsed = new Map<string, Parsed>();
  const properties = json.properties ?? json.allOf?.[0].properties;
  if (!properties) {
    throw new Error("No properties found in _main.json");
  }
  for (const [key, value] of Object.entries(properties)) {
    const ref = value.else?.$ref ?? value.$ref;
    const fpath = path.join(path.dirname(filepath), ref!);
    const json = await readJson<Schema>(fpath, { jsonc: true });
    const filename = key.split(":")[1];
    const typeName = `${typePrefix}${pascalCase(filename)}${typeSuffix}`;
    const text = await schemaParser.parse(json, typeName, { refParser });
    if (!text) {
      // Deprecated
      continue;
    }
    info(`Parsing ${key}`);
    const _dest = path.join(dest, `${filename}`);
    await writeFile(_dest + ".ts", `// auto generated\n${text}`, {
      parser: "typescript",
    });
    parsed.set(key, {
      filepath: _dest + ".js",
      typeName,
    });
  }
  return parsed;
}
export async function parseComponentSchema(filepath: string, typeName: string) {
  const json = await readJson<Schema>(filepath, { jsonc: true });
  return schemaParser.parse(json, typeName, {
    refParser: refParserDefault,
  });
}
