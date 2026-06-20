# Learning Practice Coevolution

<p align="center">
  <a href="README.zh-CN.md"><strong>中文</strong></a>
  |
  <a href="README.en.md"><strong>English</strong></a>
</p>

## Obsidian Plugin: Learning Practice Companion

This repository also contains `Learning Practice Companion`, a local-first Obsidian plugin for active recall, AI critique, transfer practice, and learning session records.

The plugin pairs well with Copilot for Obsidian, but it does not depend on Copilot, read Copilot settings, call any AI API, collect telemetry, or make network requests.

Plugin commands:

- Start learning session
- Insert reconstruction prompt
- Insert Copilot mentor prompt
- Insert transfer and misuse test
- Close as observer note

Community plugin assets:

- `manifest.json`
- `main.js`
- `styles.css`
- `versions.json`
- `PRIVACY.md`

Manual installation:

1. Download `manifest.json`, `main.js`, and `styles.css` from a GitHub release.
2. Put them under `<your-vault>/.obsidian/plugins/learning-practice-companion/`.
3. Restart Obsidian and enable `Learning Practice Companion` in Community plugins.

See [PRIVACY.md](PRIVACY.md) for the local-only privacy boundary.

## Skill: Learning Practice Coevolution

Core philosophy: reading is training; practice is learning.

`learning-practice-coevolution` turns reading and doing into one training loop. In reading, the user first reconstructs the material in their own words, then AI critiques false familiarity, vague concepts, missing examples, and transfer breaks. In practice, the real task becomes the exercise field: define the problem contract, use the concept, observe the result, and record the next practice.

Its operating sequence is: user reconstruction -> AI critique -> concept repair -> transfer practice -> real-task test -> observation -> reusable asset candidate. It switches from Mentor critique to Digital Apprentice execution only after the learning or problem contract is clear.

核心理念：阅读即训练，实践即学习。

`learning-practice-coevolution` 把“读”和“做”放进同一个训练闭环：阅读时，用户先用自己的话重构材料，AI 再批改假熟悉、模糊概念、缺少例子和迁移断点；实践时，真实任务就是练习场，先定义问题合约，再用概念解决问题、观察结果、记录下一步练习。

它的运行顺序是：用户重构 -> AI 批改 -> 概念修补 -> 迁移练习 -> 真实任务检验 -> 观察复盘 -> 可复用资产候选。只有学习合约或问题合约清楚后，才从导师式批改切换到数字员工执行。

## Core Idea / 核心理念

This skill makes the philosophy operational through a loop:

```text
material or task -> user reconstruction -> critique -> concept repair -> transfer practice -> real-task test -> observation -> reusable asset candidate
```

It is built on five rules:

- Reading should train judgment, not only speed up content intake.
- AI should improve the user's problem ownership and reconstruction ability before producing polished output.
- Real projects are the preferred practice field.
- Mentor, Digital Apprentice, and Observer are different postures and should not be collapsed into one unreviewed answer.
- Reusable methods, SOPs, prompts, or skills need repeated practice evidence; one good session is only a candidate.

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

## Recent Evolution / 最近定位变化

The core position has not changed: this is still not a generic summarizer. It has expanded from a reading assistant into a learning-practice coevolution workflow that can support three layers:

1. **Single-session learning**: active recall, teach-back, critique, transfer tests, misuse checks, and Learning Session Records.
2. **Long-running learning**: mission setting, Learning Records, ZPD-based next practice, and lightweight learning workspace boundaries.
3. **Real-work practice**: using real business or research projects as practice anchors, with decision questions, hypothesis trees, evidence plans, method-lens tracking, and Observer recommendations.
4. **Observer reading prescriptions**: when a repeated thinking or analysis gap appears, the Observer can recommend a narrow book chapter, concept, paper, or practice drill tied to that gap instead of producing a generic reading list.

核心定位没有变：它仍然不是通用总结器。变化在于，它已经从“读书辅助”扩展为一套学习实践共演流程，可支撑三层场景：

1. **单次学习**：主动回忆、teach-back、理解批改、迁移测试、误用检查和 Learning Session Record。
2. **长期学习**：Mission、Learning Record、基于 ZPD 的下一步练习，以及轻量学习工作区边界。
3. **真实工作练习**：把业务研究或真实项目作为 practice anchor，先定义决策问题、假设树、证据计划，记录 method lens，并由 Observer 给出学习建议。
4. **观察者阅读处方**：当重复的思考或分析缺口出现时，Observer 可以推荐绑定该缺口的章节、概念、论文或练习，而不是给泛泛书单。

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
- Offers SQ3R and Cornell-style micro-patterns for active reading and review notes.
- Uses real-work research as a practice anchor through decision questions, hypothesis trees, evidence plans, method lenses, and observer recommendations.
- Turns Observer recommendations into scoped reading prescriptions: observed gap -> narrow reading target -> follow-up practice.
- Keeps candidate methods, SOPs, prompts, and skills behind validation gaps instead of promoting them after one session.

## When To Use

Use this skill when you want help with:

- reading a book, chapter, article, PDF, EPUB, course note, or highlight set;
- understanding a concept you can recognize but cannot use;
- Feynman-style explanation checks, active recall, or blank-paper reconstruction;
- turning reading into a project exercise, method candidate, SOP, prompt, or skill candidate;
- turning a business or research topic into a decision question, hypothesis tree, evidence plan, and practice loop;
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
- `manifest.json` / `main.js` / `styles.css` / `versions.json` - Obsidian plugin assets.
- `PRIVACY.md` - local-only plugin privacy boundary.
- `skill-package-manifest.json` - skill package metadata and file hashes.
- `LICENSE` - MIT License.
- `CHANGELOG.md` - public release notes.

## Quick Start

Copy `SKILL.md` into the skill folder used by your agent tool, or reference it directly as task material.

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

Use this skill as a learning and practice workflow. Do not include confidential material, local paths, account traces, connector configuration, logs, secrets, or other non-public information when sharing examples or derivatives.

把这个 Skill 当作学习和实践流程使用。分享示例或衍生版本时，不要包含保密材料、本地路径、账号痕迹、连接器配置、日志、密钥或其他非公开信息。

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
