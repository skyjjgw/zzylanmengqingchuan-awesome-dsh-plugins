# 贡献指南

感谢你帮忙补充 DSH 插件，但请不要把仓库变成链接垃圾场。

## 提交前检查

请先确认：

- 这是 DeepSeek Harness 插件、Skill、工作流或直接相关的基础设施；
- 有公开的原始 GitHub 仓库；
- README 能说明用途和安装方式；
- 有许可证，或明确写 `unknown`；
- 没有把 API Key、Token、密码、OAuth code 或私人路径放进提交；
- 你能写出至少一个已知限制；
- 你说明了自己是如何核验的：本机使用、安装配置，还是只读源码。

## 条目格式

编辑 [`catalog/plugins.json`](../catalog/plugins.json)，保持字段完整：

- `id`：稳定、短的小写标识；
- `name`：项目名称；
- `category`：工作流类别；
- `repository`：原始仓库，不要填二次转载页；
- `package`：npm 包名，不存在时用 `null`；
- `install`：推荐安装命令，特殊步骤写在 `caution`；
- `license`：以仓库 LICENSE 为准；
- `verification`：四种核验等级之一；
- `compatibility`：只写有证据的版本和运行要求；
- `why`：说明解决的具体问题；
- `caution`：说明风险、限制或不适合场景；
- `source_reviewed`：写明读过的原始资料；
- `reviewed_on`：使用 `YYYY-MM-DD`。

## 不接受的写法

- “全网最好”“必装”“百分之百兼容”等无证据营销词；
- 把 GitHub star、搜索排名当作质量证明；
- 把 README 宣称的功能写成我们已经实测；
- 把一个插件的内置终端/预览能力重复包装成另一个插件的实测能力；
- 只提供安装命令，不提供来源、版本或限制；
- 提交真实凭据或用户私人数据。

## 提交 PR

```sh
node scripts/validate.mjs
```

然后提交一个小而清楚的 PR，说明：

1. 为什么推荐这个项目；
2. 你读了哪些一手资料；
3. 是否完成安装或功能验证；
4. 哪些部分仍然未知。
