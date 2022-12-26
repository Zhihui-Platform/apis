/**
 * @function Tokenizer
 * @param {Method} method
 * @returns {string} document
 */
export function Documentizor(method, file, base) {
  const introduction = `## (\`${method.method}\`): \`${method.path}\`

${method.description}

### 调用方式

- 接口地址：\`${method.path}\`
- 调用方法：\`${method.method}\`
`;

  let params = ``;
  let datas = ``;
  let queries = ``;
  let headers = ``;

  if ("headers" in method) {
    const value = Object.entries(method.headers)
      .map(
        ([key, value]) =>
          `|\`${key}\`|\`${value}\`|`
      )
      .join("\n");
    params = `
### 请求头（\`值\`）

|名称|值|
|----|--------|
${value}
`;
  }

  if ("parameters" in method) {
    const value = Object.entries(method.parameters)
      .map(
        ([key, value]) =>
          `|\`${key}\`|${value.required ? "是" : "否"}|\`${value.type}\`|${
            value.description
          }`
      )
      .join("\n");
    params = `
### 地址传参（\`params\`）

|名称|是否必须|类型|解释说明|
|---|-|--|--------|
${value}
`;
  }

  if ("datas" in method) {
    const value = Object.entries(method.datas)
      .map(
        ([key, value]) =>
          `|\`${key}\`|${value.required ? "是" : "否"}|\`${value.type}\`|${
            value.description
          }`
      )
      .join("\n");
    datas = `
### 请求体传参（\`body\`）

|名称|是否必须|类型|解释说明|
|---|-|--|--------|
${value}
`;
  }

  if ("queries" in method) {
    const value = Object.entries(method.queries)
      .map(
        ([key, value]) =>
          `|\`${key}\`|${value.required ? "是" : "否"}|\`${value.type}\`|${
            value.description
          }`
      )
      .join("\n");
    queries = `
### 查询参数（\`queries\`）

|名称|是否必须|类型|解释说明|
|---|-|--|--------|
${value}
`;
  }

  const result_example = `
### 返回样例

\`\`\`json
${JSON.stringify(method.result_example, null, 2)}
\`\`\`

::: details 定义文件（于\`@${base}\\${file}.yml\`）
<<< @${base}/${file}.yml{yaml}
:::
`
  return introduction + headers + params + datas + queries + result_example;

}
