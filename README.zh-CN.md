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

`learning-practice-coevolution` 不是通用总结器。它让你先重构理解，再让 Agent 批改、修补概念、补充例子、设计迁移练习，并把学习带回真实任务。

## 快速上手

已经能调用这个 Skill 后，先用这段：

```text
使用 $learning-practice-coevolution。

我正在读：{书 / 文章 / PDF / 课程笔记 / 概念}
我的真实目的：{我为什么要读}

请不要直接总结。
先问我 1-2 个必要问题，然后让我用自己的话重构理解。
之后批改我的理解，并给我一个能用到真实任务里的迁移练习。
```

还没安装也没关系。你可以先把 `SKILL.zh-CN.md` 或 `SKILL.md` 当作任务材料发给 Agent；等确认有用，再放进 Agent 工具支持的 Skill 目录。

## 我只有一个 Agent，能用吗？

可以。

最低配置就是：

```text
Agent + 本 Skill + 你提供的材料
```

更顺手的组合是：

```text
阅读器 + 知识库 + Agent + 本 Skill
```

几个常见问题：

| 问题 | 回答 |
| --- | --- |
| 我需要 Obsidian 吗？ | 不需要。Obsidian 只是可选工作区。 |
| 我需要知识库吗？ | 不需要。你直接粘贴材料也能用。 |
| 阅读器是什么？ | 微信读书、PDF 阅读器、EPUB 阅读器、浏览器都可以。 |
| 仓库里的 Obsidian 插件必须装吗？ | 不必须。它是可选插件。社区审核通过后，Obsidian 用户可以直接从 Community plugins 安装；审核期间也可以从 GitHub 手动安装。 |

## 我该怎么把书给 Agent？

先别让它总结整本书。先把材料和目的说清楚：

```text
给材料 -> 说目的 -> 定范围 -> 先重构 -> 再批改 -> 做迁移 -> 留反馈 -> 下一轮继续
```

实际操作时，你只需要做三件事：

1. 给它能读到的材料：目录、章节、划线、笔记、PDF 页面，或你的读后想法。
2. 告诉它你为什么读：为了理解概念、解决项目问题、准备表达，还是系统学习一个主题。
3. 限定本轮范围：整本书太大时，先从一章、一组划线或一个概念开始。

关键边界：

```text
Agent 不会自动知道你阅读 App 里的内容。
如果已有集成，就让 Agent 调用集成并先检查访问范围。
如果没有集成，就提供摘录、笔记、划线、目录、PDF 页面或你自己的阅读反思。
```

## 常见材料来源

| 材料来源 | 你该怎么做 |
| --- | --- |
| 微信读书（如果已接入 Agent） | 告诉 Agent 书名、章节、划线或笔记范围；让它先检查访问权限。 |
| 不确定微信读书是否已接入 | 先问 Agent 能不能读取；不能读取就手动复制目录、划线或笔记。 |
| 微信读书没有接入 | 复制目录、章节摘录、划线、笔记或读后想法到 Agent。 |
| PDF / EPUB | 上传文件，或粘贴目录加目标章节 / 页码范围。 |
| 已经读完一本书 | 提供书名、你记得的核心观点、划线或反思；从重构检查开始。 |
| 只有一个概念 | 提供概念，以及你想把它用在哪个真实问题上。 |
| 没有材料，只有主题 | 让 Agent 设计连续学习路径，每次只生成一小课。 |

## 它能帮你解决什么问题

**读了一本书，感觉懂了，但用不出来。**

它不会替你总结。它会先让你用自己的话讲一遍，再批改你的理解，最后给你一个能用到工作或项目里的练习。

**面对一个复杂概念，不知道从哪里开始学。**

你告诉它目的和当前水平，它会把主题拆成小课。每次只学一小段，课后用反馈调整难度、例子和下一步方向。

**想把学到的东西用到真实项目里。**

把项目任务和阅读材料一起给它。它会把这个任务当成练习题，带你从材料里找最相关的部分，而不是另造一个空泛作业。

**想沉淀方法，但不想因为一次好答案就固化。**

它可以把方法、SOP、Prompt 或 Skill 先放在候选层。只有反复练习有效，才值得继续整理。

不要把它当成“全文总结器”来用。

## Agent 开始时应该先问什么？

提供材料后，Agent 不应该先总结。它应该先确认：

1. 你为什么读这个？它服务哪个真实问题？
2. 本轮材料范围是什么：整本书、章节、划线、笔记、PDF 页码，还是一个概念？
3. 你要的产物是什么：理解检查、章节学习、迁移练习、项目材料、读书卡、连续课程，还是方法候选？

## 常用提示词

完整中文提示词见 [USAGE.zh-CN.md](USAGE.zh-CN.md)，包括：

- 微信读书划线 / 笔记；
- PDF 章节；
- 已经读完一本书；
- 真实项目迁移；
- 连续学习路径。

## 材料不完整时怎么办？

Agent 不应该假装读过整本书。

- 只有目录：可以做阅读地图。
- 只有划线：围绕划线做理解检查。
- 只有书名：应该要求目录、章节摘录、笔记或你的问题。
- PDF 只能部分读取：标出缺口，只基于可见内容工作。

## 在 Obsidian 里安装

社区审核通过后，你可以直接在 Obsidian 里安装：

1. 打开 Obsidian Settings。
2. 进入 Community plugins，并关闭 Restricted mode。
3. 点击 Browse。
4. 搜索 `Learning Practice Coevolution`。
5. 点击 Install，然后 Enable。

启用后，在命令面板里搜索 `Learning Practice`，可以使用这些命令：

- Start learning session
- Insert reconstruction prompt
- Insert Copilot mentor prompt
- Insert transfer and misuse test
- Close as observer note

社区审核期间，也可以先从 GitHub 手动安装：

1. 从 release `0.1.1` 下载 `manifest.json`、`main.js` 和 `styles.css`。
2. 放入 `<your-vault>/.obsidian/plugins/learning-practice-coevolution/`。
3. 重启 Obsidian，并在 Community plugins 中启用 `Learning Practice Coevolution`。

这个 Obsidian 插件是 local-first。它适合配合 Copilot for Obsidian 使用，但不依赖 Copilot，不读取 Copilot 设置，不调用任何 AI API，不收集 telemetry，也不发起网络请求。

local-only 隐私边界见 [PRIVACY.md](PRIVACY.md)。

## 你现在能用的功能

公开版已经包含核心学习流程：主动回忆、AI 批改、迁移练习、连续课程、学习反馈和方法候选。

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
