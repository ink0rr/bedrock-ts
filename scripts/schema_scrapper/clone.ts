import { rm } from "fs/promises";
import JSZip from "jszip";
import path from "node:path/posix";
import { cloneGit } from "../util/clone_git";

const url = "https://github.com/bridge-core/editor-packages/archive/refs/heads/main.zip";
export async function cloneBridge() {
  await cloneGit(url, "editor-packages.zip");

  const extractDir = "./temp/editor-packages-main/";
  try {
    await rm(extractDir, { recursive: true, force: true });
  } catch (e) {
    console.error(e);
  }
  const buffer = await Bun.file("./temp/editor-packages.zip").arrayBuffer();
  const zip = await JSZip.loadAsync(buffer);
  const promises = Object.entries(zip.files).map(async ([filepath, file]) => {
    if (file.dir) return;
    const buffer = await file.async("arraybuffer");
    if (buffer.byteLength === 0) return;
    return await Bun.write(path.join("./temp", filepath), buffer);
  });
  await Promise.all(promises);
}
