import json5 from "json5";
import prettier from "prettier";

type ReadOptions = {
  jsonc?: boolean;
};
export async function readJson<T>(filepath: string, options?: ReadOptions): Promise<T> {
  if (options?.jsonc) return await json5.parse(await Bun.file(filepath).text());
  return await Bun.file(filepath).json();
}

type WriteOptions = {
  parser?: "json" | "typescript";
};
export async function writeFile(dest: string, data: string, options?: WriteOptions) {
  const parser = options?.parser ?? "json";
  const config = await prettier.resolveConfig("./.prettierrc");
  const text = await prettier.format(data, {
    ...config,
    parser,
    plugins: [require("prettier-plugin-organize-imports")],
  });
  await Bun.write(dest, text);
}
