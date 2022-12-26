import { readFileSync, writeFileSync } from "node:fs";
import yaml from "js-yaml";
import { cwd } from "process";
import { join } from "path";
import { Documentizor } from "./tokenizer.js";
import { resolve } from "node:path";

const { load } = yaml;

// const baseDir = resolve(cwd(), process.argv[2] || ".");

export function createApiDoc(baseDir) {
  /**
   * @type {Index}
   */
  const index = load(readFileSync(join(baseDir, "index.yml")));

  console.log(index);

  let result = `
${index.description}

`;

  ["get", "get_all", "post", "put", "delete", "deleteAll"].forEach((method) => {
    if (index.methods[method]) {
      // result += Documentizor()

      /**
       * @type {Method} description
       */
      const description = load(readFileSync(join(baseDir, `${method}.yml`)));

      result += Documentizor(description, method, baseDir.replace(resolve(cwd()), ""));
    }
  });

  writeFileSync(resolve(baseDir, "apis.md"), `# ${baseDir.replace(resolve(cwd()), "").replace(/\\/g, "/")}

以下为 ${baseDir.replace(resolve(cwd()), "")} 的 API 文档。

支持方法：${Object.keys(index.methods).filter(x => index.methods[x]).map(x => `\`${x}\``).join(", ")}

${result}`);

}
