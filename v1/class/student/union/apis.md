# /v1/class/student/union

以下为 \v1\class\student\union 的 API 文档。

支持方法：`get_all`


Get Students in the Class as Union Tree

## (`GET`): `/v1/class/student/{gradeid}/{classid}/union`

Get Students in the Student Union

### 调用方式

- 接口地址：`/v1/class/student/{gradeid}/{classid}/union`
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
      "number": 20200110,
      "name": "王五",
      "sex": 1,
      "union": "discipline",
      "position": "minister"
    },
    {
      "number": 20200130,
      "name": "李四",
      "sex": 0,
      "union": "core",
      "position": "chairman"
    }
  ]
}
```

::: details 定义文件（于`@\v1\class\student\union\get_all.yml`）
<<< @\v1\class\student\union\get_all.yml{yaml}
:::
