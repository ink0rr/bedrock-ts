import { semver } from "bun";
import path from "node:path/posix";
import { readJson, writeFile } from "../util/fs";
import { info } from "../util/log";
import { ParserOptions, parseSchema, SchemaProperty, snakeToPascal } from "../util/schema_parser";

const versionRegex = /v(\d+\.\d+\.\d+)/;

type ParseSchemasOptions = {
  excludeFiles?: string[];
  dest?: "bp" | "rp";
  parserOptions?: ParserOptions;
};

type FileData = {
  version: string;
  filepath: string;
};

/**
 *
 * @param type
 * @param options
 * @returns - Map of filename to typeName
 */
export async function parseComponentSchemas(type: string, options: ParseSchemasOptions = {}) {
  const packDestType = options.dest || "bp";

  const root = `./temp/editor-packages-main/packages/minecraftBedrock/schema/${type}`;
  const pattern = `${root}/v*/**/*.json`;
  const scanned = new Map<string, string>();
  const fileVersions = new Map<string, FileData>();

  let excludeFiles = options.excludeFiles || [
    "event",
    "main",
    "_main",
    "description",
    "blockTraits",
  ];

  const entries = new Bun.Glob(pattern).scan();
  for await (const _f of entries) {
    const filepath = _f.replace(/\\/g, "/");
    const filename = path.basename(filepath, ".json");

    if (excludeFiles.includes(filename)) continue;

    const scannedVersion = fileVersions.get(filename)?.version;
    const version = versionRegex.exec(filepath)?.[1];

    if (!version) continue;

    if (!scannedVersion || semver.order(version, scannedVersion) > 0) {
      fileVersions.set(filename, { version, filepath });
    }
  }

  const fileEntries = Array.from(fileVersions.entries()).map(([filename, data]) => {
    const relative = path.relative(root, data.filepath).split("/").slice(1).join("/");
    return `${root}/v${data.version}/${relative}`;
  });
  for await (const filepath of fileEntries) {
    const filename = path.basename(filepath, ".json");
    if (excludeFiles.includes(filename)) continue;

    if (scanned.has(filename)) continue;

    const json = await readJson<SchemaProperty>(filepath, { jsonc: true });
    const typeName = `${snakeToPascal(type)}${snakeToPascal(filename)}Component`;
    scanned.set(filename, typeName);
    const ts = parseSchema(json, typeName, { useNamespace: true, ...options.parserOptions });
    if (!ts) {
      // Deprecated
      scanned.set(filename, "");
      continue;
    }

    const data = fileVersions.get(filename);
    info(`Processing: ${filename} v${data?.version}`);
    await writeFile(
      `./src/${packDestType}/${type}_components/${filename}.ts`,
      `// auto generated\n${ts}`,
      {
        parser: "typescript",
      },
    );
  }

  return scanned;
}
