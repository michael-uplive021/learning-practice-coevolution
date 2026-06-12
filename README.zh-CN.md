# Learning Practice Coevolution

阅读是训练。实践是学习。

English version: [README.en.md](README.en.md). 主入口: [README.md](README.md).

`learning-practice-coevolution` 是一个 Agent Skill，用于把书籍、文章、课程笔记、摘录、高亮和真实工作转成主动回忆、批改、迁移练习、学习记录和可复用学习资产。

它不是通用总结器。它默认让用户保留问题主导权：先用 AI 做导师式批改，暴露假熟悉、模糊理解和迁移断点；等学习合约或问题合约清楚后，再切换到数字员工执行。

## 语言版本

- 主 Skill: [SKILL.md](SKILL.md)
- 英文 Skill 快照: [SKILL.en.md](SKILL.en.md)
- 中文 Skill 版本: [SKILL.zh-CN.md](SKILL.zh-CN.md)
- 英文 README: [README.en.md](README.en.md)
- 支持与付款说明: [SUPPORT.md](SUPPORT.md)

## 它做什么

- 从阅读背后的真实任务或真实问题开始。
- 在可行时先做主动回忆、空白纸重构和 teach-back，再给完整解释。
- 区分作者主张、文本证据、AI 解释、用户判断和可迁移方法。
- 优先把用户的真实工作当作练习题，而不是另造一套低摩擦但无业务意义的作业。
- 支持三种姿态：导师、数字员工、观察者。
- 支持轻量 Learning Session Record 和长期 Learning Workspace。
- 对方法、SOP、Prompt、Skill 候选保留验证缺口，不因一次好答案直接升格。

## 什么时候使用

适合这些场景：

- 读书、读章节、读文章、读 PDF / EPUB、读课程笔记或高亮集；
- 对概念“看得懂但用不出来”；
- 做费曼解释、主动回忆、空白纸重构、理解批改；
- 把阅读转成项目练习、方法候选、SOP、Prompt 或 Skill 候选；
- 维护长期学习项目，沉淀 learning records 和下一步练习；
- 从导师批改切到真实执行前，先确认问题定义和验收标准。

不适合把它当成“全文总结器”直接用。

## 文件说明

- `SKILL.md` - 主 Skill，默认英文 canonical 版本。
- `SKILL.en.md` - 英文 Skill 快照。
- `SKILL.zh-CN.md` - 中文 Skill 版本。
- `README.en.md` / `README.zh-CN.md` - 中英文说明。
- `SUPPORT.md` - 支持入口和付款边界。
- `agents/openai.yaml` - 可选的 OpenAI 展示元数据。
- `assets/` - 公开付款链接的二维码 SVG。
- `MANIFEST.json` - 包元数据和文件哈希。
- `LICENSE` - MIT License。
- `CHANGELOG.md` - 公开版本记录。

## 快速开始

把 `SKILL.md` 或 `SKILL.zh-CN.md` 放到你的 Agent Runtime 支持的 Skill 目录中。如果宿主系统不支持安装型 Skill，也可以把它作为任务材料引用。

示例：

```text
使用 $learning-practice-coevolution 帮我读这一章。
不要先总结，先问我问题，然后批改我的回答。
```

另一个示例：

```text
使用 $learning-practice-coevolution。
我大概知道这个概念，但用不出来。
先让我重构，再给一个玩具例子和一个迁移练习。
```

## 宿主系统边界

如果你的宿主系统已有自己的 Runtime、治理、证据、隐私或写回规则，优先遵循宿主系统。本 Skill 是兼容适配器，不覆盖本地规则。

公开版本刻意剥离了私有项目样例、本地路径、连接器配置、账号痕迹、日志和非公开知识。

## 支持

如果这个 Skill 对你的读书、学习或真实项目练习有帮助，可以通过下面公开付款入口支持后续维护。

| 地区 | 链接 | 二维码 |
| --- | --- | --- |
| 中国境内 | [爱发电 V2 item](https://ifdian.net/item/e2f39c10505211f1a93452540025c377) | ![爱发电二维码](assets/afdian-v2-early-access.svg) |
| 海外 | [PayPal.Me](https://paypal.me/michael061394) | ![PayPal.Me 二维码](assets/paypal-me-michael061394.svg) |

这些是外部手动支持入口。二维码只编码上方公开付款 URL，不包含密码、API key、银行卡信息或隐藏的自动扣费逻辑。完整边界见 [SUPPORT.md](SUPPORT.md)。

## 许可证

MIT License. Copyright (c) 2026 Jie Huang.

分发或改编本 Skill 时，请保留版权和许可证声明。
