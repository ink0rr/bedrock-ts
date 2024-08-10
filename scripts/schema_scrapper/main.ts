import { rm } from "fs/promises";
import { parseBlockComponent } from "./block";
import { cloneBridge } from "./clone";
import { parseItemComponent } from "./item";

async function main() {
  console.log("Cloning Bridge...");
  await cloneBridge();

  console.log("Parsing Block Components...");
  try {
    await rm("./src/bp/block_components", { recursive: true, force: true });
  } catch {}
  await parseBlockComponent();

  console.log("Parsing Item Components...");
  try {
    await rm("./src/bp/item_components", { recursive: true, force: true });
  } catch {}
  await parseItemComponent();
}

await main();
