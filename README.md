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
    "pathPrefix": "/api",
    "prettier":  {
      "semi": false
    }
  }
}
```
需要生成api时执行npm run autoapi即可。

# 参数支持说明
- url swagger地址
- projectName swagger项目名称 
- pathPrefix 请求路径前缀 
- prettier 自定义代码风格配置

# Todo List
-[ ] request的封装模板完善
-[X] 允许配置请求path的前缀
-[X] 支持config文件进行配置
-[X] 支持prettier配置进行自定义代码风格
-[ ] 考虑支持ts？自动生成ts类型定义
-[ ] 支持.d.ts文件，便于编辑器提示

# License

[MIT](https://opensource.org/licenses/MIT)
