import { semver } from "bun";
import path from "node:path/posix";

export async function getVersion(type: "entity" | "item" | "block" | "particle") {
  const glob = new Bun.Glob(
    `./temp/editor-packages-main/packages/minecraftBedrock/schema/${type}/v**/main.json`,
  ).scan();
  const versions: string[] = [];
  for await (const _f of glob) {
    const v = path.basename(path.dirname(_f.replace(/\\/g, "/")));
    versions.push(v);
  }
  versions.sort(semver.order);
  return versions[versions.length - 1];
}
