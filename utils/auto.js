import { existsSync, readdirSync, writeFileSync } from "fs";
import { createApiDoc } from "./single.js";
import { resolve } from "path";

const dirsx = [];

function getSubApis(baseDir) {
  const dirs = readdirSync(baseDir, { withFileTypes: true })
    .filter((x) => x.isDirectory())
    .map((x) => x.name);

  let str = `# ${baseDir
    .replace(resolve(process.cwd()), "")
    .replace(/\\/g, "/")}

`;

  if (dirs.length !== 0) {
    // return;
    str += `## 子目录
${dirs.map((x) => `- [${x}](./${x}/)`).join("\n")}
`;
  }

  if (existsSync(resolve(baseDir, "index.yml"))) {
    str += `## API 文档
[API 文档](./apis.md)
`;
  }

  dirs.forEach((dir) => {
    if (existsSync(resolve(baseDir, dir, "index.yml"))) {
      createApiDoc(resolve(baseDir, dir));
      dirsx.push(resolve(baseDir, dir));
    }
    getSubApis(resolve(baseDir, dir));
  });

  writeFileSync(resolve(baseDir, "index.md"), str);
}

getSubApis(resolve(process.cwd(), "v1"));

console.log(dirsx);
