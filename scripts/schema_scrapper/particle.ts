import path from "node:path/posix";
import { readJson, writeFile } from "../util/fs";
import { info } from "../util/log";
import { SchemaProperty } from "../util/schema_parser";
import { parseComponentSchemas } from "./parser";
import { getVersion } from "./version";

function parseRef(string: string): string | undefined {
  if (string.endsWith("molang/embedded.json")) return "MoLang";
  if (string.endsWith("eventEnum.json")) return "string";
  if (string.endsWith("block_identifiers")) return "BlockIdentifier";
  return;
}

export async function parseParticleComponent() {
  const version = await getVersion("particle");
  info(`version ${version}`);
  const parsed = await parseComponentSchemas("particle", {
    dest: "rp",
    parserOptions: { refParser: parseRef },
  });
  const mainString: string[] = ["export type ParticleComponents = {"];
  const mainFilepath = `./temp/editor-packages-main/packages/minecraftBedrock/schema/particle/${version}/components/_main.json`;
  if (!Bun.file(mainFilepath).exists()) {
    throw new Error(`File not found for main: ${mainFilepath}`);
  }
  const mainJson = await readJson<SchemaProperty>(mainFilepath, { jsonc: true });
  if (!mainJson.properties) {
    throw new Error(`No properties found in main file: ${mainFilepath}`);
  }
  for (const [k, v] of Object.entries(mainJson.properties)) {
    const filenameProp = path.basename(v.$ref!, ".json");
    const typeName = parsed.get(filenameProp);
    if (!typeName) continue;
    mainString.push(`"${k}"?: ${typeName};`);
    // Insert import at the top
    mainString.unshift(`import { ${typeName} } from "./${filenameProp}.js";`);
  }
  mainString.push("};");
  await writeFile(`./src/rp/particle_components/index.ts`, mainString.join("\n"), {
    parser: "typescript",
  });
}
