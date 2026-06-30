# Learning Practice Coevolution

<p align="center">
  <a href="README.zh-CN.md">中文</a>
  |
  <strong>English</strong>
  |
  <a href="README.md">Main</a>
  |
  <a href="USAGE.zh-CN.md">Chinese Usage</a>
</p>

Turn AI from "summarize this book for me" into "help me practice until I can use it."

`learning-practice-coevolution` is not a generic summarizer. It helps the user reconstruct understanding first, then lets the agent critique, repair concepts, add examples, create transfer practice, and bring learning back into a real task.

## 30-Second Start

Copy this into your agent after installing or referencing `SKILL.md`:

```text
Use $learning-practice-coevolution.

I am reading: {book / article / PDF / course note / concept}
My real purpose is: {why I am reading it}

Do not summarize first.
First ask me 1-2 necessary questions, then make me reconstruct the idea in my own words.
After that, critique my understanding and give me one transfer exercise for a real task.
```

## What Tools Do I Need?

| Tool | Required? | Role |
| --- | --- | --- |
| Agent | Required | Runs the conversation and applies the skill. |
| This Skill | Required | Provides the learning-practice workflow. |
| Reader | Optional | WeRead, PDF reader, EPUB reader, browser, or any reading app. |
| Knowledge base | Optional | Obsidian, Notion, Markdown folder, Feishu docs, or no knowledge base at all. |

Best setup:

```text
Reader + Knowledge Base + Agent + Skill
```

Minimum setup:

```text
Agent + Skill + user-provided material
```

You do not need Obsidian to use this skill. Obsidian is only one possible workspace. The included Obsidian plugin is an optional local companion.

## How To Give Material To The Agent

Basic flow:

```text
give material -> state purpose -> set scope -> reconstruct first -> critique -> transfer practice -> leave feedback -> continue next round
```

Common sources:

| Material source | What to do |
| --- | --- |
| WeRead integrated with Agent | Tell the agent the book, chapter, highlights, or notes range; the agent should check access first. |
| WeRead not integrated | Copy the table of contents, chapter excerpt, highlights, notes, or reading thoughts into the agent. |
| PDF / EPUB | Upload the file, or paste the table of contents plus target chapter or page range. |
| Already finished a book | Provide the title, remembered thesis, highlights, or reflections; the agent starts with a reconstruction check. |
| Only a concept | Provide the concept plus the real problem you want to use it on. |
| No material, only a topic | Ask the agent to build a serial learning path, one small lesson at a time. |

The agent does not automatically know what is in your reading app. If integration exists, use it. If not, provide excerpts, notes, highlights, table of contents, PDF pages, or your own reading reflection.

## Agent's First Questions

After material is provided, the agent should not summarize first. It should ask:

1. Why are you reading this? What real question does it serve?
2. What is the material scope: whole book, chapter, highlights, notes, PDF pages, or concept?
3. What output do you want: understanding check, chapter learning, transfer exercise, project material, reading card, serial lesson, or method candidate?

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
- Supports feedback-driven serial lessons: previous feedback -> next lesson strategy -> mastery checks -> remedial micro-lesson -> stage review.
- Keeps candidate methods, SOPs, prompts, and skills behind validation gaps instead of promoting them after one session.

## When To Use

Use this skill when you want help with:

- reading a book, chapter, article, PDF, EPUB, course note, or highlight set;
- understanding a concept you can recognize but cannot use;
- Feynman-style explanation checks, active recall, or blank-paper reconstruction;
- turning reading into a project exercise, method candidate, SOP, prompt, or skill candidate;
- turning a business or research topic into a decision question, hypothesis tree, evidence plan, and practice loop;
- maintaining a long-running learning workspace with learning records and next-practice steps;
- continuing a sequence of lessons based on the user's previous feedback and mastery checks;
- handing off from learning critique to real execution only after the problem is well defined.

Do not use it as a generic summarizer.

## Material Incompleteness Boundary

The agent should not pretend it has read the whole book.

- If only a table of contents is provided, it can make a reading map.
- If only highlights are provided, it can run understanding checks around those highlights.
- If only the title is provided, it should ask for a table of contents, chapter excerpt, notes, or user question.
- If a PDF is only partially readable, it should mark the gap and work only with visible content.

## Optional Obsidian Companion Plugin

This repository also contains `Learning Practice Companion`, a local-first Obsidian plugin for active recall, AI critique, transfer practice, and learning session records.

The plugin is optional. It pairs well with Copilot for Obsidian, but it does not depend on Copilot, read Copilot settings, call any AI API, collect telemetry, or make network requests.

Manual installation:

1. Download `manifest.json`, `main.js`, and `styles.css` from a GitHub release.
2. Put them under `<your-vault>/.obsidian/plugins/learning-practice-companion/`.
3. Restart Obsidian and enable `Learning Practice Companion` in Community plugins.

See [PRIVACY.md](PRIVACY.md) for the local-only privacy boundary.

## Public Version Boundary

This public version keeps the general learning workflow: active recall, AI critique, transfer practice, serial lessons, learning feedback, and method candidates.

It does not include private BP-Wiki project paths, dashboards, private learning logs, business project examples, connector settings, internal Runtime governance, secrets, account traces, or non-public knowledge.

## Files

- `SKILL.md` - the main skill.
- `SKILL.en.md` - English skill snapshot.
- `SKILL.zh-CN.md` - Chinese skill version.
- `README.md` - bilingual public onboarding entry.
- `README.en.md` / `README.zh-CN.md` - language-specific documentation.
- `USAGE.zh-CN.md` - Chinese usage flow and prompt recipes.
- `SUPPORT.md` - support and payment links.
- `agents/openai.yaml` - optional OpenAI-facing display metadata.
- `assets/` - QR code assets for public support channels.
- `manifest.json` / `main.js` / `styles.css` / `versions.json` - Obsidian plugin assets.
- `PRIVACY.md` - local-only plugin privacy boundary.
- `skill-package-manifest.json` - skill package metadata and file hashes.
- `LICENSE` - MIT License.
- `CHANGELOG.md` - public release notes.

## Project Article

- Chinese WeChat article: [Read the article](https://mp.weixin.qq.com/s/DO3uann8cmPEO0T5OtwY4w)

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
