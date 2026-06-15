# Learning Practice Coevolution

<p align="center">
  <strong>中文</strong>
  |
  <a href="README.en.md">English</a>
  |
  <a href="README.md">主入口</a>
</p>

核心理念：阅读即训练，实践即学习。

`learning-practice-coevolution` 把“读”和“做”放进同一个训练闭环：阅读时，用户先用自己的话重构材料，AI 再批改假熟悉、模糊概念、缺少例子和迁移断点；实践时，真实任务就是练习场，先定义问题合约，再用概念解决问题、观察结果、记录下一步练习。

它的运行顺序是：用户重构 -> AI 批改 -> 概念修补 -> 迁移练习 -> 真实任务检验 -> 观察复盘 -> 可复用资产候选。只有学习合约或问题合约清楚后，才从导师式批改切换到数字员工执行。

## 核心理念

这个 Skill 通过一条闭环把理念落到操作上：

```text
材料或任务 -> 用户重构 -> 批改 -> 概念修补 -> 迁移练习 -> 真实任务检验 -> 观察复盘 -> 可复用资产候选
```

核心规则：

- 阅读要训练判断力，而不是只提高信息摄入速度。
- AI 先提高用户的问题主导权和重构能力，再生产漂亮答案。
- 真实项目优先作为练习场。
- 导师、数字员工和观察者是不同姿态，不能混成一个未经审查的答案。
- 方法、SOP、Prompt 或 Skill 候选需要重复实践证据；一次好会话只能算候选。

## 最近定位变化

核心定位没有变：它仍然不是通用总结器。变化在于，它已经从“读书辅助”扩展为一套学习实践共演流程，可支撑三层场景：

1. **单次学习**：主动回忆、teach-back、理解批改、迁移测试、误用检查和 Learning Session Record。
2. **长期学习**：Mission、Learning Record、基于 ZPD 的下一步练习，以及轻量学习工作区边界。
3. **真实工作练习**：把业务研究或真实项目作为 practice anchor，先定义决策问题、假设树、证据计划，记录 method lens，并由 Observer 给出学习建议。

公开版保持 host-neutral，不绑定 BP-Wiki、Obsidian、Dashboard 或任何私有工作区。如果你的宿主系统已有 Runtime、证据规则、项目空间、看板或学习日志，优先遵守宿主系统。

## 项目说明文章

- 微信公众号中文说明：[阅读文章](https://mp.weixin.qq.com/s/DO3uann8cmPEO0T5OtwY4w)

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
- 提供 SQ3R 与 Cornell 笔记微模式，用于主动阅读和复习笔记。
- 把真实业务研究作为 practice anchor，通过决策问题、假设树、证据计划、method lens 和 observer recommendation 形成练习闭环。
- 对方法、SOP、Prompt、Skill 候选保留验证缺口，不因一次好答案直接升格。

## 什么时候使用

适合这些场景：

- 读书、读章节、读文章、读 PDF / EPUB、读课程笔记或高亮集；
- 对概念“看得懂但用不出来”；
- 做费曼解释、主动回忆、空白纸重构、理解批改；
- 把阅读转成项目练习、方法候选、SOP、Prompt 或 Skill 候选；
- 把业务或研究主题转成决策问题、假设树、证据计划和练习闭环；
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
- `assets/` - 公开支持入口的二维码资产。
- `MANIFEST.json` - 包元数据和文件哈希。
- `LICENSE` - MIT License。
- `CHANGELOG.md` - 公开版本记录。

## 快速开始

把 `SKILL.md` 或 `SKILL.zh-CN.md` 放到你的 Agent Runtime 支持的 Skill 目录中。如果你的工具环境不支持安装型 Skill，也可以把它作为任务材料引用。

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

## 使用边界

如果你使用的 AI、笔记或 Agent 系统已经有自己的运行规则、证据要求、隐私要求或写回规则，优先遵循原系统规则。本 Skill 只是一个兼容适配器，不覆盖你的本地规则。

公开版本刻意剥离了私有项目样例、本地路径、连接器配置、账号痕迹、日志和非公开知识。

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
