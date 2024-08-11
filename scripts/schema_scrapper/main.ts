import { rm } from "fs/promises";
import { error, info } from "../util/log";
import { parseBlockComponent } from "./block";
import { cloneBridge } from "./clone";
import { parseEntityComponent } from "./entity";
import { parseItemComponent } from "./item";
import { parseParticleComponent } from "./particle";

async function main() {
  info("Cloning Bridge...");
  await cloneBridge();

  info("Parsing Block Components...");
  try {
    await rm("./src/bp/block_components", { recursive: true, force: true });
    await parseBlockComponent();
  } catch (e) {
    error(e);
  }

  info("Parsing Item Components...");
  try {
    await rm("./src/bp/item_components", { recursive: true, force: true });
    await parseItemComponent();
  } catch (e) {
    error(e);
  }

  info("Parsing Entity Components...");
  try {
    await rm("./src/bp/entity_components", { recursive: true, force: true });
    await parseEntityComponent();
  } catch (e) {
    error(e);
  }

  info("Parsing Particle Components...");
  try {
    await rm("./src/rp/particle_components", { recursive: true, force: true });
    await parseParticleComponent();
  } catch (e) {
    error(e);
  }
}

await main();
