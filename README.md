# Learning Practice Coevolution

<p align="center">
  <a href="README.zh-CN.md"><strong>中文</strong></a>
  |
  <a href="README.en.md"><strong>English</strong></a>
</p>

Reading is training. Practice is learning.

`learning-practice-coevolution` is an agent skill for turning books, articles, course notes, excerpts, highlights, and real work into active recall, critique, transfer practice, learning records, and reusable learning assets.

`learning-practice-coevolution` 是一个学习实践共演 Skill，用于把读书、文章、课程笔记、摘录、高亮和真实工作转成主动回忆、批改、迁移练习、学习记录和可复用学习资产。

It is designed for people who do not want AI to simply summarize material for them. The skill keeps the user in charge of the problem, uses AI as mentor before execution, and only switches to execution after the learning or problem contract is clear.

它不把 AI 当成默认总结器，而是先让用户保留问题主导权：执行前先进入导师式批改，问题或学习合约清楚后再切换到数字员工执行。

## Core Idea / 核心理念

This skill turns learning into a loop:

```text
material or task -> user reconstruction -> critique -> concept repair -> transfer practice -> observation -> reusable asset candidate
```

It is built on five rules:

- Reading should train judgment, not only speed up content intake.
- AI should improve the user's problem ownership and reconstruction ability before producing polished output.
- Real projects are the preferred practice field.
- Mentor, Digital Apprentice, and Observer are different postures and should not be collapsed into one unreviewed answer.
- Reusable methods, SOPs, prompts, or skills need repeated practice evidence; one good session is only a candidate.

这个 Skill 的核心不是“总结得更快”，而是让学习形成闭环：

```text
材料或任务 -> 用户重构 -> 批改 -> 概念修补 -> 迁移练习 -> 观察复盘 -> 可复用资产候选
```

核心规则：

- 阅读要训练判断力，而不是只提高信息摄入速度。
- AI 先提高用户的问题主导权和重构能力，再生产漂亮答案。
- 真实项目优先作为练习场。
- 导师、数字员工和观察者是不同姿态，不能混成一个未经审查的答案。
- 方法、SOP、Prompt 或 Skill 候选需要重复实践证据；一次好会话只能算候选。

## 中文快速理解

这不是一个“帮我总结这本书”的模板，而是一套给 Agent 使用的学习训练流程。它默认先让你说出自己的理解，再让 AI 批改、追问、补例子、找迁移场景，最后才进入真实任务执行。

它适合三类情况：

- 你读过材料，但说不清楚、用不出来；
- 你想把阅读变成真实项目里的练习，而不是停在笔记整理；
- 你想沉淀方法、SOP、Prompt 或 Skill 候选，但又不想因为一次好答案就过早固化。

推荐用法很简单：

```text
使用 $learning-practice-coevolution 帮我读这篇材料。
不要先总结。先问我问题，让我解释，然后批改我的理解。
最后帮我设计一个能用到真实工作的练习。
```

如果你已经有项目或真实任务，直接把任务告诉它。本 Skill 会优先把真实工作当作练习题，而不是另造一个没有业务意义的作业。

## Project Article / 项目说明文章

- 中文项目说明文章（微信公众号）：[阅读文章](https://mp.weixin.qq.com/s/DO3uann8cmPEO0T5OtwY4w)

## Language Versions

- Main skill: [SKILL.md](SKILL.md)
- English skill snapshot: [SKILL.en.md](SKILL.en.md)
- 中文 Skill 版本: [SKILL.zh-CN.md](SKILL.zh-CN.md)
- English README: [README.en.md](README.en.md)
- 中文 README: [README.zh-CN.md](README.zh-CN.md)

## What It Does

- Starts from the real task or question behind the reading.
- Uses active recall and teach-back before giving full explanations when feasible.
- Separates source claims, AI interpretation, user judgment, and transferable method.
- Turns real work into the practice exercise when possible.
- Supports Mentor, Digital Apprentice, and Observer postures.
- Provides lightweight Learning Session Record and Learning Workspace structures.
- Keeps candidate methods, SOPs, prompts, and skills behind validation gaps instead of promoting them after one session.

## When To Use

Use this skill when you want help with:

- reading a book, chapter, article, PDF, EPUB, course note, or highlight set;
- understanding a concept you can recognize but cannot use;
- Feynman-style explanation checks, active recall, or blank-paper reconstruction;
- turning reading into a project exercise, method candidate, SOP, prompt, or skill candidate;
- maintaining a long-running learning workspace with learning records and next-practice steps;
- handing off from learning critique to real execution only after the problem is well defined.

Do not use it as a generic summarizer.

## Files

- `SKILL.md` - the main skill.
- `SKILL.en.md` - English skill snapshot.
- `SKILL.zh-CN.md` - Chinese skill version.
- `README.en.md` / `README.zh-CN.md` - bilingual documentation.
- `SUPPORT.md` - support and payment links.
- `agents/openai.yaml` - optional OpenAI-facing display metadata.
- `assets/` - QR code assets for public support channels.
- `MANIFEST.json` - package metadata and file hashes.
- `LICENSE` - MIT License.
- `CHANGELOG.md` - public release notes.

## Quick Start

Copy `SKILL.md` into the skill folder used by your agent runtime, or reference it directly as task material if your host system does not support installable skills.

Example prompt:

```text
Use $learning-practice-coevolution to help me read this chapter.
Do not summarize first. Ask me questions and critique my answer.
```

Another example:

```text
Use $learning-practice-coevolution. I understand the concept vaguely but cannot use it.
Make me reconstruct it, then give me a toy example and one transfer exercise.
```

## Usage Boundary / 使用边界

If your host system has its own runtime, governance, evidence, privacy, or writeback rules, follow the host system first. This skill is a compatible adapter, not an override for your local rules.

如果你使用的 AI、笔记或 Agent 系统已经有自己的运行规则、证据要求、隐私要求或写回规则，优先遵循原系统规则。本 Skill 只是一个兼容适配器，不覆盖你的本地规则。

The public version intentionally excludes private project examples, local paths, connector configuration, account traces, logs, and non-public knowledge.

公开版本已经剥离私有项目样例、本地路径、连接器配置、账号痕迹、日志和非公开知识。

## Support

If this skill helps your reading, learning, or real-work practice loop, you can support future maintenance through the public payment links below.

如果这个 Skill 对你的读书、学习或真实项目练习有帮助，可以通过下面公开付款入口支持后续维护。

| Region | Link | QR |
| --- | --- | --- |
| Mainland China / 中国境内 | Alipay QR / 支付宝二维码 | <img src="assets/alipay-jie-qr.png" alt="Alipay QR code" width="180"> |
| International / 海外 | [PayPal.Me](https://paypal.me/michael061394) | <img src="assets/paypal-me-michael061394.svg" alt="PayPal.Me QR code" width="180"> |

These are external manual support channels. The Alipay image is a user-provided public payment QR image. This repository does not include payment passwords, API keys, bank-card data, or hidden checkout automation. See [SUPPORT.md](SUPPORT.md) for the full payment boundary.

## License

MIT License. Copyright (c) 2026 Jie Huang.

Attribution and license notice must be preserved when redistributing or adapting this skill.
