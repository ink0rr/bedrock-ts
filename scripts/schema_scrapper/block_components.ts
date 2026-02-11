import { rm } from "node:fs/promises";
import path from "node:path/posix";
import { writeFile } from "../util/fs";
import { error, info } from "../util/log";
import { parseComponentSchemas } from "./parser";

export async function parseBlockComponents(version = "v1.21.90") {
  info(`version ${version}`);
  const dest = path.join("src", "bp", "block_components");
  const arg = {
    dest,
    typePrefix: "Block",
    typeSuffix: "Component",
  };
  const components = await parseComponentSchemas({
    dirpath: `block/${version}/components`,
    ...arg,
  }).catch((e) => {
    error(`Failed to parse block components:`, e);
    return undefined;
  });
  if (!components) {
    return;
  }
  await rm("./src/bp/block_components", { recursive: true, force: true });
  const str = ["export type BlockComponents = {"];
  for (const [key, { filepath, typeName, content }] of components) {
    const js = path.basename(filepath, ".ts") + ".js";
    await writeFile(filepath, content, { parser: "typescript" });
    str.push(`"${key}"?: ${typeName};`);
    str.unshift(`import { ${typeName} } from "./${js}";`);
  }
  str.push("};");
  await writeFile(path.join(dest, "index.ts"), str.join("\n"), { parser: "typescript" });
}
