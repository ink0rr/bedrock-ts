import EasyDl from "easydl";
import { mkdir, readdir, unlink } from "fs/promises";

export async function cloneGit(url: string, filename: string) {
  try {
    // create directory
    try {
      await readdir("./temp");
    } catch {
      await mkdir("./temp");
    }

    const dest = `./temp/${filename}`;
    if (await Bun.file(dest).exists()) {
      await unlink(dest);
    }

    const dl = new EasyDl(url, dest, { connections: 5 });
    const completed = await dl.wait();
    return completed;
  } catch (e) {
    console.error(e);
  }
  return false;
}
