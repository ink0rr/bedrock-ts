import path from "node:path/posix";
import { writeFile } from "../util/fs";
import { info } from "../util/log";
import { parseComponentSchemas } from "./parser";

export async function parseBlockComponents() {
  const version = "v1.21.70";
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
  });
  const str = ["export type BlockComponents = {"];
  for (const [key, { filepath, typeName }] of components) {
    str.push(`"${key}"?: ${typeName};`);
    str.unshift(`import { ${typeName} } from "./${path.basename(filepath)}";`);
  }
  str.push("};");
  await writeFile(path.join(dest, "index.ts"), str.join("\n"), { parser: "typescript" });
}
