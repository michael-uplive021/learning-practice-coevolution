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

## Quick Start

If your agent can already use this skill, start with this:

```text
Use $learning-practice-coevolution.

I am reading: {book / article / PDF / course note / concept}
My real purpose is: {why I am reading it}

Do not summarize first.
First ask me 1-2 necessary questions, then make me reconstruct the idea in my own words.
After that, critique my understanding and give me one transfer exercise for a real task.
```

If you have not installed it yet, you can first paste `SKILL.md` as task material. Move it into your agent's skill folder after you decide it is useful.

## Can I Use It With Only An Agent?

Yes.

Minimum setup:

```text
Agent + this Skill + user-provided material
```

Better setup:

```text
Reader + Knowledge Base + Agent + this Skill
```

| Question | Answer |
| --- | --- |
| Do I need Obsidian? | No. Obsidian is only one possible workspace. |
| Do I need a knowledge base? | No. You can paste material directly. |
| What counts as a reader? | WeRead, PDF reader, EPUB reader, browser, or any reading app. |
| Is the Obsidian plugin required? | No. It is optional. Obsidian users can install it from Community plugins. GitHub release files remain the manual fallback. |

## How To Give Material To The Agent

Do not ask for a whole-book summary first. Give the agent material, purpose, and scope:

```text
give material -> state purpose -> set scope -> reconstruct first -> critique -> transfer practice -> leave feedback -> continue next round
```

Common sources:

| Material source | What to do |
| --- | --- |
| WeRead, if integrated with your agent | Tell the agent the book, chapter, highlights, or notes range; ask it to check access first. |
| Not sure whether WeRead is integrated | Ask the agent whether it can read it; if not, copy the table of contents, highlights, or notes manually. |
| WeRead not integrated | Copy the table of contents, chapter excerpt, highlights, notes, or reading thoughts into the agent. |
| PDF / EPUB | Upload the file, or paste the table of contents plus target chapter or page range. |
| Already finished a book | Provide the title, remembered thesis, highlights, or reflections; the agent starts with a reconstruction check. |
| Only a concept | Provide the concept plus the real problem you want to use it on. |
| No material, only a topic | Ask the agent to build a serial learning path, one small lesson at a time. |

The agent does not automatically know what is in your reading app. If integration exists, use it and ask the agent to check access first. If not, provide excerpts, notes, highlights, table of contents, PDF pages, or your own reading reflection.

## Problems This Helps With

**You finished a book and feel you understood it, but cannot use it.**

The skill should not summarize for you. It should first make you explain the idea in your own words, then critique that explanation, then give you a work or project exercise.

**You face a difficult concept and do not know where to begin.**

Tell the agent your purpose and current level. It can split the topic into small lessons, then adjust difficulty, examples, and direction from your feedback.

**You want to bring reading into a real project.**

Give it both the project task and the material. The agent should treat the task as the exercise and find the most relevant parts of the material.

**You want to preserve a method without freezing it too early.**

Methods, SOPs, prompts, or skill ideas stay as candidates until repeated practice shows they are actually useful.

Do not use it as a generic summarizer.

## Agent's First Questions

After material is provided, the agent should not summarize first. It should ask:

1. Why are you reading this? What real question does it serve?
2. What is the material scope: whole book, chapter, highlights, notes, PDF pages, or concept?
3. What output do you want: understanding check, chapter learning, transfer exercise, project material, reading card, serial lesson, or method candidate?

## Material Incompleteness Boundary

The agent should not pretend it has read the whole book.

- If only a table of contents is provided, it can make a reading map.
- If only highlights are provided, it can run understanding checks around those highlights.
- If only the title is provided, it should ask for a table of contents, chapter excerpt, notes, or user question.
- If a PDF is only partially readable, it should mark the gap and work only with visible content.

## Install In Obsidian

You can install the optional plugin directly from Obsidian:

1. Open Obsidian Settings.
2. Go to Community plugins and turn off Restricted mode.
3. Click Browse.
4. Search for `Learning Practice Coevolution`.
5. Click Install, then Enable.

After enabling the plugin, open the command palette and search for `Learning Practice`. You can start a learning session, insert a reconstruction prompt, add a transfer practice, or close the session with an observer note.

If Browse does not show the plugin yet, install it manually from GitHub:

1. Download `manifest.json`, `main.js`, and `styles.css` from release `0.1.1`.
2. Put them under `<your-vault>/.obsidian/plugins/learning-practice-coevolution/`.
3. Restart Obsidian and enable `Learning Practice Coevolution` in Community plugins.

The Obsidian plugin is local-first. It pairs well with Copilot for Obsidian, but it does not depend on Copilot, read Copilot settings, call any AI API, collect telemetry, or make network requests.

See [PRIVACY.md](PRIVACY.md) for the local-only privacy boundary.

## What You Get In The Public Version

The public version already includes the core learning workflow: active recall, AI critique, transfer practice, serial lessons, learning feedback, and method candidates.

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
