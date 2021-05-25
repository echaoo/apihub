# swagger-Autoapi
Swagger to JS &amp; Vue &amp; Axios Codegen
# Installation
```shell
npm install swagger-autoapi --dev --save
```

# Usage
在package.json中写入配置信息
```json
{
  "scripts": {
    "autoapi": "autoapi"
  },
  "apihub": {
    "url": "http://xxx.com",
    "projectName": "swagger-project-name",
    "pathPrefix": "/api"
  }
}
```
需要生成api时执行npm run autoapi即可。

# Todo List
-[ ] request的封装模板完善
-[X] 允许配置请求path的前缀
-[ ] 支持config文件进行配置
-[ ] 支持eslint配置
-[ ] 支持.d.ts文件，便于编辑器提示
-[ ] 考虑支持ts？自动生成ts类型定义

# License

[MIT](https://opensource.org/licenses/MIT)
