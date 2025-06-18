import path from "node:path/posix";
import { writeFile } from "../util/fs";
import { info } from "../util/log";
import { parseComponentSchema, parseComponentSchemas } from "./parser";

async function canPowerJump(): Promise<Patch> {
  const text = `export type EntityCanPowerJumpComponent = Record<string, never>;`;
  return {
    text,
    typeName: "EntityCanPowerJumpComponent",
    key: "minecraft:can_power_jump",
    category: "EntityComponents",
  };
}
async function moveAwayFromTarget(): Promise<Patch> {
  const typeName = "EntityBehaviorMoveAwayFromTargetComponent";
  const text = await parseComponentSchema(
    "./temp/editor-packages-main/packages/minecraftBedrock/schema/entity/v1.20.60/behaviors/behavior.move_away_from_target.json",
    typeName,
  );
  return {
    text,
    typeName,
    key: "minecraft:behavior.move_away_from_target",
    category: "Behaviors",
  };
}
async function sonicBoom(): Promise<Patch> {
  const typeName = "EntityBehaviorSonicBoomComponent";
  const text = await parseComponentSchema(
    "./temp/editor-packages-main/packages/minecraftBedrock/schema/entity/v1.19.0/behaviors/behavior.sonic_boom.json",
    typeName,
  );
  return {
    text,
    typeName,
    key: "minecraft:behavior.sonic_boom",
    category: "Behaviors",
  };
}
const patches = [canPowerJump, moveAwayFromTarget, sonicBoom] satisfies Array<() => Promise<Patch>>;

export async function parseEntityComponents() {
  const version = "v1.21.80";
  info(`version ${version}`);
  const dest = path.join("src", "bp", "entity_components");
  const arg = {
    dest,
    typePrefix: "Entity",
    typeSuffix: "Component",
  };
  const [annotations, behaviors, components] = await Promise.all([
    await parseComponentSchemas({
      dirpath: `entity/${version}/annotations`,
      ...arg,
    }),
    await parseComponentSchemas({
      dirpath: `entity/${version}/behaviors`,
      ...arg,
    }),
    await parseComponentSchemas({
      dirpath: `entity/${version}/components`,
      ...arg,
    }),
  ]);
  const entries = {
    Annotations: annotations,
    Behaviors: behaviors,
    EntityComponents: components,
  } as const;
  await Promise.all(
    patches.map(async (f) => {
      const { category, key, text, typeName } = await f();
      const filename = `${key.split(":").pop()}`;
      const filepath = path.join(dest, filename);
      await writeFile(filepath + ".ts", text, { parser: "typescript" });
      info(`Patching: ${key}`);
      entries[category].set(key, {
        filepath: filepath + ".js",
        typeName,
      });
    }),
  );

  const str = ["export namespace EntityComponents {"];
  for (const [type, map] of Object.entries(entries)) {
    if (type === "EntityComponents") {
      str.push("};");
    }
    str.push(`export type ${type} = {`);
    for (const [key, { filepath, typeName }] of map) {
      str.push(`"${key}"?: ${typeName};`);
      str.unshift(`import { ${typeName} } from "./${path.basename(filepath)}";`);
    }
    if (type === "EntityComponents") {
      str.push("} & EntityComponents.Annotations & EntityComponents.Behaviors;");
    } else {
      str.push("};");
    }
  }
  await writeFile(path.join(dest, "index.ts"), str.join("\n"), { parser: "typescript" });
}

type Patch = {
  text: string;
  typeName: string;
  key: string;
  category: "Annotations" | "Behaviors" | "EntityComponents";
};
