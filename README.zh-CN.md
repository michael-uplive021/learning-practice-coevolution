# Learning Practice Coevolution

<p align="center">
  <strong>中文</strong>
  |
  <a href="README.en.md">English</a>
  |
  <a href="README.md">主入口</a>
  |
  <a href="USAGE.zh-CN.md">中文用法</a>
</p>

让 AI 从“帮你总结书”变成“陪你练会一个东西”。

`learning-practice-coevolution` 不是通用总结器。它让你先重构理解，再让 Agent 批改、补例子、做迁移练习，并把学习带回真实任务。

## 30 秒开始

把 `SKILL.zh-CN.md` 或 `SKILL.md` 放进你的 Agent Skill 目录，或者直接把它作为任务材料引用。然后复制：

```text
使用 $learning-practice-coevolution。

我正在读：{书 / 文章 / PDF / 课程笔记 / 概念}
我的真实目的：{我为什么要读}

请不要直接总结。
先问我 1-2 个必要问题，然后让我用自己的话重构理解。
之后批改我的理解，并给我一个能用到真实任务里的迁移练习。
```

## 我需要哪些工具？

| 工具 | 是否必需 | 作用 |
| --- | --- | --- |
| Agent | 必需 | 执行对话和调用 Skill。 |
| 本 Skill | 必需 | 提供学习实践共演流程。 |
| 阅读器 | 可选 | 微信读书、PDF 阅读器、EPUB 阅读器、浏览器或任意阅读 App。 |
| 知识库 | 可选 | Obsidian、Notion、Markdown 文件夹、飞书文档，或者没有知识库。 |

最佳组合：

```text
阅读器 + 知识库 + Agent + Skill
```

最低组合：

```text
Agent + Skill + 你提供的材料
```

你不需要 Obsidian 才能使用这个 Skill。Obsidian 只是可选工作区。本仓库里的 Obsidian 插件也是可选 companion，不是必需入口。

## 我该怎么把书给 Agent？

基本流程：

```text
给材料 -> 说目的 -> 定范围 -> 先重构 -> 再批改 -> 做迁移 -> 留反馈 -> 下一轮继续
```

展开后是：

1. 你同步、上传或粘贴阅读材料。
2. Agent 先检查自己实际能访问什么。
3. Agent 问你为什么读，这次阅读服务哪个真实问题。
4. Agent 设置阅读模式：快速扫读、章节学习、概念掌握、真实任务迁移或连续课程。
5. 你先用自己的话重构理解。
6. Agent 批改并修补理解。
7. Agent 给迁移练习或补救小课。
8. 你留下反馈，作为下一轮调整依据。

关键边界：

```text
Agent 不会自动知道你阅读 App 里的内容。
如果已有集成，就让 Agent 调用集成并先检查访问范围。
如果没有集成，就提供摘录、笔记、划线、目录、PDF 页面或你自己的阅读反思。
```

## 常见材料来源

| 材料来源 | 你该怎么做 |
| --- | --- |
| 微信读书已经接入 Agent | 告诉 Agent 书名、章节、划线或笔记范围；Agent 先检查访问权限。 |
| 微信读书没有接入 | 复制目录、章节摘录、划线、笔记或读后想法到 Agent。 |
| PDF / EPUB | 上传文件，或粘贴目录加目标章节 / 页码范围。 |
| 已经读完一本书 | 提供书名、你记得的核心观点、划线或反思；Agent 从重构检查开始。 |
| 只有一个概念 | 提供概念，以及你想把它用在哪个真实问题上。 |
| 没有材料，只有主题 | 让 Agent 设计连续学习路径，每次只生成一小课。 |

## Agent 开始时应该先问什么？

提供材料后，Agent 不应该先总结。它应该先问：

1. 你为什么读这个？它服务哪个真实问题？
2. 这次材料范围是什么：整本书、章节、划线、笔记、PDF 页码，还是一个概念？
3. 你要的产物是什么：理解检查、章节学习、迁移练习、项目材料、读书卡、连续课程，还是方法候选？

## 常用提示词

完整中文提示词见 [USAGE.zh-CN.md](USAGE.zh-CN.md)，包括：

- 微信读书划线 / 笔记；
- PDF 章节；
- 已经读完一本书；
- 真实项目迁移；
- 连续学习路径。

## 它做什么

- 从阅读背后的真实任务或真实问题开始。
- 在可行时先做主动回忆、空白纸重构和 teach-back，再给完整解释。
- 区分作者主张、文本证据、AI 解释、用户判断和可迁移方法。
- 优先把用户的真实工作当作练习题，而不是另造一套低摩擦但无业务意义的作业。
- 支持三种姿态：导师、数字员工、观察者。
- 支持轻量 Learning Session Record 和长期 Learning Workspace。
- 提供 SQ3R 与 Cornell 笔记微模式，用于主动阅读和复习笔记。
- 把真实业务研究作为 practice anchor，通过决策问题、假设树、证据计划、method lens 和 observer recommendation 形成练习闭环。
- 将 Observer 建议转成有范围的阅读处方：具体缺口 -> 窄范围阅读对象 -> 后续练习。
- 支持反馈驱动连续课程：上一篇反馈 -> 下一课策略 -> 掌握检查 -> 补充小课 -> 阶段复盘。
- 对方法、SOP、Prompt、Skill 候选保留验证缺口，不因一次好答案直接升格。

## 什么时候使用

适合这些场景：

- 读书、读章节、读文章、读 PDF / EPUB、读课程笔记或高亮集；
- 对概念“看得懂但用不出来”；
- 做费曼解释、主动回忆、空白纸重构、理解批改；
- 把阅读转成项目练习、方法候选、SOP、Prompt 或 Skill 候选；
- 把业务或研究主题转成决策问题、假设树、证据计划和练习闭环；
- 维护长期学习项目，沉淀 learning records 和下一步练习；
- 基于上一课反馈和掌握检查继续生成连续课程；
- 从导师批改切到真实执行前，先确认问题定义和验收标准。

不适合把它当成“全文总结器”直接用。

## 材料不完整时怎么办？

Agent 不应该假装读过整本书。

- 只有目录：可以做阅读地图。
- 只有划线：围绕划线做理解检查。
- 只有书名：应该要求目录、章节摘录、笔记或你的问题。
- PDF 只能部分读取：标出缺口，只基于可见内容工作。

## 可选 Obsidian Companion 插件

本仓库也包含 `Learning Practice Companion`，一个 local-first 的 Obsidian 插件，用于主动回忆、AI 批改、迁移练习和 Learning Session Record。

插件是可选的。它适合配合 Copilot for Obsidian 使用，但不依赖 Copilot，不读取 Copilot 设置，不调用任何 AI API，不收集 telemetry，也不发起网络请求。

插件命令：

- Start learning session
- Insert reconstruction prompt
- Insert Copilot mentor prompt
- Insert transfer and misuse test
- Close as observer note

手动安装：

1. 从 GitHub release 下载 `manifest.json`、`main.js` 和 `styles.css`。
2. 放入 `<your-vault>/.obsidian/plugins/learning-practice-companion/`。
3. 重启 Obsidian，并在 Community plugins 中启用 `Learning Practice Companion`。

local-only 隐私边界见 [PRIVACY.md](PRIVACY.md)。

## 公开版边界

这个公开版保留通用学习流程：主动回忆、AI 批改、迁移练习、连续课程、学习反馈和方法候选。

它不包含私有 BP-Wiki 项目路径、Dashboard、私人学习日志、业务项目样例、连接器设置、内部 Runtime 治理、密钥、账号痕迹或非公开知识。

## 文件说明

- `SKILL.md` - 主 Skill，默认英文 canonical 版本。
- `SKILL.en.md` - 英文 Skill 快照。
- `SKILL.zh-CN.md` - 中文 Skill 版本。
- `README.md` - 中英双语公开入口。
- `README.en.md` / `README.zh-CN.md` - 中英文说明。
- `USAGE.zh-CN.md` - 中文使用流程和提示词。
- `SUPPORT.md` - 支持入口和付款边界。
- `agents/openai.yaml` - 可选的 OpenAI 展示元数据。
- `assets/` - 公开支持入口的二维码资产。
- `manifest.json` / `main.js` / `styles.css` / `versions.json` - Obsidian 插件文件。
- `PRIVACY.md` - local-only 插件隐私边界。
- `skill-package-manifest.json` - Skill 包元数据和文件哈希。
- `LICENSE` - MIT License。
- `CHANGELOG.md` - 公开版本记录。

## 项目说明文章

- 微信公众号中文说明：[阅读文章](https://mp.weixin.qq.com/s/DO3uann8cmPEO0T5OtwY4w)

## 支持

如果这个 Skill 对你的读书、学习或真实项目练习有帮助，可以通过下面公开付款入口支持后续维护。

| 地区 | 链接 | 二维码 |
| --- | --- | --- |
| 中国境内 | 支付宝二维码 | <img src="assets/alipay-jie-qr.png" alt="支付宝二维码" width="180"> |
| 海外 | [PayPal.Me](https://paypal.me/michael061394) | <img src="assets/paypal-me-michael061394.svg" alt="PayPal.Me 二维码" width="180"> |

这些是外部手动支持入口。支付宝图片是用户提供的公开收款二维码。本仓库不包含支付密码、API key、银行卡信息或隐藏的自动扣费逻辑。完整边界见 [SUPPORT.md](SUPPORT.md)。

## 许可证

MIT License. Copyright (c) 2026 Jie Huang.

分发或改编本 Skill 时，请保留版权和许可证声明。
