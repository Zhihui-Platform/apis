# /v1/class/student/league

以下为 \v1\class\student\league 的 API 文档。

支持方法：`get_all`


Get Students in the Class as League Branch Tree

## (`GET`): `/v1/class/student/{gradeid}/{classid}/league`

Get All League Members In A Class

### 调用方式

- 接口地址：`/v1/class/student/{gradeid}/{classid}/league`
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
  "data": [
    {
      "id": 20200101,
      "name": "张三",
      "sex": 1,
      "league": "pre",
      "position": "pre"
    },
    {
      "id": 20200131,
      "name": "李四",
      "sex": 0,
      "league": "member",
      "position": "secretary"
    }
  ]
}
```

::: details 定义文件（于`@\v1\class\student\league\get_all.yml`）
<<< @\v1\class\student\league\get_all.yml{yaml}
:::
