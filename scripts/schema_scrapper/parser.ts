import path from "node:path/posix";
import { readJson, writeFile } from "../util/fs";
import { info } from "../util/log";
import { parseSchema, SchemaProperty, snakeToPascal } from "../util/schema_parser";

type ParseSchemasOptions = {
  excludeFiles?: string[];
};

/**
 *
 * @param type
 * @param options
 * @returns - Map of filename to typeName
 */
export async function parseComponentSchemas(type: string, options: ParseSchemasOptions = {}) {
  const glob = `./temp/editor-packages-main/packages/minecraftBedrock/schema/${type}/v*/**/*.json`;
  const scanned = new Map<string, string>();

  let excludeFiles = options.excludeFiles || [
    "event",
    "main",
    "_main",
    "description",
    "blockTraits",
  ];

  const entries = new Bun.Glob(glob).scan();
  for await (const _f of entries) {
    const filepath = _f.replace(/\\/g, "/");
    const filename = path.basename(filepath, ".json");
    if (excludeFiles.includes(filename)) continue;

    if (scanned.has(filename)) continue;

    const json = await readJson<SchemaProperty>(filepath, { jsonc: true });
    const typeName = `${snakeToPascal(type)}${snakeToPascal(filename)}Component`;
    scanned.set(filename, typeName);
    const ts = parseSchema(json, typeName, { useNamespace: true });
    if (!ts) {
      // Deprecated
      scanned.set(filename, "");
      continue;
    }

    info(`Processing: ${filename}`);
    await writeFile(`./src/bp/${type}_components/${filename}.ts`, `// auto generated\n${ts}`, {
      parser: "typescript",
    });
  }

  return scanned;
}
