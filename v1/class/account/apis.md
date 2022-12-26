# /v1/class/account

以下为 \v1\class\account 的 API 文档。

支持方法：`get`, `post`, `put`


Apis of Class Account

## (`GET`): `/v1/class/account/{gradeid}/{classid}`

Get specific class account

### 调用方式

- 接口地址：`/v1/class/account/{gradeid}/{classid}`
- 调用方法：`GET`

### 地址传参（`params`）

|名称|是否必须|类型|解释说明|
|---|-|--|--------|
|`gradeid`|是|`integer`|Grade ID
|`classid`|是|`integer`|Class ID

### 返回样例

```json
{
  "status": 200,
  "result": {
    "gradeid": 2020,
    "classid": 3,
    "classname": "2020 级 11 班",
    "account": "c_2020_11",
    "students": 48
  }
}
```

::: details 定义文件（于`@\v1\class\account\get.yml`）
<<< @\v1\class\account\get.yml{yaml}
:::
## (`POST`): `/v1/class/account`

Create a class account

### 调用方式

- 接口地址：`/v1/class/account`
- 调用方法：`POST`

### 请求体传参（`body`）

|名称|是否必须|类型|解释说明|
|---|-|--|--------|
|`gradeid`|是|`integer`|Grade ID
|`classid`|是|`integer`|Class ID
|`classname`|是|`string`|Class Name
|`students`|是|`integer`|Number of Students
|`password`|是|`string`|Password

### 返回样例

```json
{
  "status": 200
}
```

::: details 定义文件（于`@\v1\class\account\post.yml`）
<<< @\v1\class\account\post.yml{yaml}
:::
## (`PUT`): `/v1/class/account/{gradeid}/{classid}`

Update a class account

### 调用方式

- 接口地址：`/v1/class/account/{gradeid}/{classid}`
- 调用方法：`PUT`

### 地址传参（`params`）

|名称|是否必须|类型|解释说明|
|---|-|--|--------|
|`gradeid`|是|`integer`|Grade ID
|`classid`|是|`integer`|Class ID

### 请求体传参（`body`）

|名称|是否必须|类型|解释说明|
|---|-|--|--------|
|`classname`|否|`string`|Class Name
|`students`|否|`integer`|Number of Students
|`password`|否|`string`|Password

### 返回样例

```json
{
  "status": 200
}
```

::: details 定义文件（于`@\v1\class\account\put.yml`）
<<< @\v1\class\account\put.yml{yaml}
:::
