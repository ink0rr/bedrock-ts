import { rm } from "fs/promises";
import { parseArgs } from "util";
import { error, info } from "../util/log";
import { parseBlockComponents } from "./block_components";
import { cloneBridge } from "./clone";
import { parseEntityComponents } from "./entity_components";
import { parseItemComponents } from "./item_components";
import { parseParticleComponents } from "./particle_components";

function getArg() {
  const { positionals } = parseArgs({
    args: Bun.argv,
    allowPositionals: true,
  });
  return positionals[2];
}

async function main() {
  let version = getArg();
  if (!version || !version.startsWith("v")) {
    info("No version specified, using default v1.21.90");
    version = "v1.21.90";
  }
  info("Cloning Bridge...");
  await cloneBridge();

  info("Parsing Block Components...");
  try {
    await rm("./src/bp/block_components", { recursive: true, force: true });
    await parseBlockComponents(version);
  } catch (e) {
    error(e);
  }

  info("Parsing Item Components...");
  try {
    await rm("./src/bp/item_components", { recursive: true, force: true });
    await parseItemComponents(version);
  } catch (e) {
    error(e);
  }

  info("Parsing Entity Components...");
  try {
    await rm("./src/bp/entity_components", { recursive: true, force: true });
    await parseEntityComponents(version);
  } catch (e) {
    error(e);
  }

  info("Parsing Particle Components...");
  try {
    await rm("./src/rp/particle_components", { recursive: true, force: true });
    await parseParticleComponents();
  } catch (e) {
    error(e);
  }
}

await main();
