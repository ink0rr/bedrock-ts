import path from "node:path/posix";
import { writeFile } from "../util/fs";
import { info } from "../util/log";
import { parseComponentSchemas } from "./parser";

export async function parseItemComponents() {
  const version = "v1.21.60";
  info(`version ${version}`);
  const dest = path.join("src", "bp", "item_components");
  const arg = {
    dest,
    typePrefix: "Item",
    typeSuffix: "Component",
  };
  const components = await parseComponentSchemas({
    dirpath: `item/${version}/components`,
    ...arg,
  });
  const str = ["export type ItemComponents = {"];
  for (const [key, { filepath, typeName }] of components) {
    str.push(`"${key}"?: ${typeName};`);
    str.unshift(`import { ${typeName} } from "./${path.basename(filepath)}";`);
  }
  str.push("};");
  await writeFile(path.join(dest, "index.ts"), str.join("\n"), { parser: "typescript" });
}
