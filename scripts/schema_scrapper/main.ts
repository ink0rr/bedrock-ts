import { rm } from "fs/promises";
import { error, info } from "../util/log";
import { parseBlockComponent } from "./block";
import { cloneBridge } from "./clone";
import { parseItemComponent } from "./item";

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
}

await main();
