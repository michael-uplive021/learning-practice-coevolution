# Learning Practice Coevolution

<p align="center">
  <a href="README.zh-CN.md">中文</a>
  |
  <strong>English</strong>
  |
  <a href="README.md">Main</a>
</p>

Core philosophy: reading is training; practice is learning.

`learning-practice-coevolution` turns reading and doing into one training loop. In reading, the user first reconstructs the material in their own words, then AI critiques false familiarity, vague concepts, missing examples, and transfer breaks. In practice, the real task becomes the exercise field: define the problem contract, use the concept, observe the result, and record the next practice.

Its operating sequence is: user reconstruction -> AI critique -> concept repair -> transfer practice -> real-task test -> observation -> reusable asset candidate. It switches from Mentor critique to Digital Apprentice execution only after the learning or problem contract is clear.

## Core Idea

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

## Recent Evolution

The core position has not changed: this is still not a generic summarizer. It has expanded from a reading assistant into a learning-practice coevolution workflow that can support three layers:

1. **Single-session learning**: active recall, teach-back, critique, transfer tests, misuse checks, and Learning Session Records.
2. **Long-running learning**: mission setting, Learning Records, ZPD-based next practice, and lightweight learning workspace boundaries.
3. **Real-work practice**: using real business or research projects as practice anchors, with decision questions, hypothesis trees, evidence plans, method-lens tracking, and Observer recommendations.

The public version keeps these ideas host-neutral. It does not depend on BP-Wiki, Obsidian, a dashboard, or any private workspace. If a host system already has its own runtime, evidence rules, dashboard, project workspace, or learning log, those rules come first.

## Project Article

- Chinese WeChat article: [Read the article](https://mp.weixin.qq.com/s/DO3uann8cmPEO0T5OtwY4w)

## Language Versions

- Main skill: [SKILL.md](SKILL.md)
- English skill snapshot: [SKILL.en.md](SKILL.en.md)
- Chinese skill version: [SKILL.zh-CN.md](SKILL.zh-CN.md)
- Chinese README: [README.zh-CN.md](README.zh-CN.md)

## What It Does

- Starts from the real task or question behind the reading.
- Uses active recall and teach-back before giving full explanations when feasible.
- Separates source claims, AI interpretation, user judgment, and transferable method.
- Turns real work into the practice exercise when possible.
- Supports Mentor, Digital Apprentice, and Observer postures.
- Provides lightweight Learning Session Record and Learning Workspace structures.
- Offers SQ3R and Cornell-style micro-patterns for active reading and review notes.
- Uses real-work research as a practice anchor through decision questions, hypothesis trees, evidence plans, method lenses, and observer recommendations.
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

## Host System Boundary

If your host system has its own runtime, governance, evidence, privacy, or writeback rules, follow the host system first. This skill is a compatible adapter, not an override for your local rules.

The public version intentionally excludes private project examples, local paths, connector configuration, account traces, logs, and non-public knowledge.

## Support

If this skill helps your reading, learning, or real-work practice loop, you can support future maintenance through the public payment links below.

| Region | Link | QR |
| --- | --- | --- |
| Mainland China | Alipay QR | <img src="assets/alipay-jie-qr.png" alt="Alipay QR code" width="180"> |
| International | [PayPal.Me](https://paypal.me/michael061394) | <img src="assets/paypal-me-michael061394.svg" alt="PayPal.Me QR code" width="180"> |

These are external manual support channels. The Alipay image is a user-provided public payment QR image. This repository does not include payment passwords, API keys, bank-card data, or hidden checkout automation. See [SUPPORT.md](SUPPORT.md) for the full payment boundary.

## License

MIT License. Copyright (c) 2026 Jie Huang.

Attribution and license notice must be preserved when redistributing or adapting this skill.
