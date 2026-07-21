# Learning Practice Coevolution

<p align="center">
  <a href="README.md">中文</a>
  |
  <strong>English</strong>
  |
  <a href="USAGE.zh-CN.md">Chinese prompt recipes</a>
</p>

> **AI should not read instead of you. It should help you explain ideas clearly, use them in real work, and turn practice into ability.**

Learning Practice Coevolution is an open-source AI learning-coach skill. It turns books, articles, PDFs, courses, concepts, and real tasks into a repeatable loop: **you reconstruct first, AI critiques second, the idea moves into a real task, and reflection chooses the next step.**

The Agent Skill is the core product. The included Obsidian plugin is an optional local tool for prompts and learning-session notes; it does not call AI by itself.

## Does This Sound Familiar?

- You finish a summary quickly but cannot explain the idea after closing the page.
- Highlights and notes keep growing, yet the concept does not show up in your work.
- AI produces polished answers while your own judgment stays unchanged.
- You start learning a topic but lose continuity after the first lesson or chapter.

The missing piece is rarely another summary. Information has not yet passed through reconstruction, correction, transfer, and feedback—so it has not become usable ability.

## How Is It Different From A Summarizer?

| A generic summarizer | Learning Practice Coevolution |
| --- | --- |
| AI answers first | You explain first |
| Compresses content | Exposes understanding gaps |
| Produces notes | Produces correction and transfer practice |
| Learning stays inside the source | Learning returns to a project or real problem |
| Every session starts over | Feedback changes the next lesson, example, and difficulty |

## One Loop, Three Roles

| Role | What it does | What you gain |
| --- | --- | --- |
| **Mentor** | Questions your reconstruction and finds false familiarity, mixed concepts, and missing examples | A more honest picture of what you understand |
| **Digital Apprentice** | Applies the concept after the goal and boundaries are clear | One testable transfer into real work |
| **Observer** | Reviews the result, detects recurring gaps, and recommends the next practice or narrow reading target | A useful next step |

```text
material or real task
-> your reconstruction
-> Mentor critique and concept repair
-> Digital Apprentice transfer practice
-> real-task test
-> Observer reflection and next step
```

A complete round should leave at least four things: your explanation, corrected gaps, one real transfer exercise, and the next learning target.

## Start In 60 Seconds

If your agent can already use this skill, send:

```text
Use $learning-practice-coevolution.

I am learning from: {book / article / PDF / course note / concept}
My real purpose is: {why I need it and where I want to use it}
This round covers: {one chapter / highlights / pages / one concept}

Do not summarize first.
Make me reconstruct the idea in my own words, then critique my understanding.
After repairing the concept, give me one transfer exercise for a real task.
End with the most useful next practice or reading target.
```

No installation yet? Give `SKILL.md` to your agent as task material and use the same prompt. Install it only after the workflow proves useful.

## A Concrete Example

You finish a strategy book and feel that “differentiation” is obvious, but you cannot use it in your own project.

This skill does not start with another book summary. It will:

1. make you explain what choice differentiation actually changes;
2. show where you confused “being different” with “being valuable to a chosen customer”;
3. ask you to define the target customer, trade-offs, and validation signals for your project;
4. use your answer to choose the next practice and, when useful, a narrow reading prescription.

The outcome is not one more reading note. The outcome is evidence that you can use the concept in a real decision.

## Who Is It For?

Good fit:

- people who read a lot but cannot explain or apply what they learned;
- learners who want active recall, teach-back, and real-task practice;
- project workers who want reading to become judgment, research, or action;
- people learning a topic over time who want each next lesson to use prior feedback.

Poor fit:

- you only want an immediate full summary and will not attempt a reconstruction;
- you want the agent to pretend it read material it cannot access;
- you want one good answer to become a permanent method, SOP, or formal skill;
- you expect the Obsidian plugin to read your whole vault, call AI, or upload notes.

## Install And Verify

### Option 1: Use It As An Agent Skill (Core)

If your agent supports skills:

1. Download or clone this repository.
2. Put `SKILL.md` and `agents/openai.yaml` in the skill directory documented by your agent host.
3. Start a new session and invoke `$learning-practice-coevolution`.
4. Verify it with “Do not summarize first; make me reconstruct.” If the agent immediately gives a full summary, the skill was not loaded or invoked correctly.

Skill directories differ across agent hosts; follow the host's own installation documentation.

### Option 2: Try It Without Installing

Give `SKILL.md` to your agent as task material. Install it after you confirm that the workflow fits you.

### Option 3: Install The Obsidian Plugin (Optional)

In Obsidian, open **Settings → Community plugins → Browse**, search for `Learning Practice Coevolution`, then install and enable it.

The plugin provides local learning sessions, reconstruction prompts, transfer-practice prompts, and observer notes. It does not read Copilot settings, call AI APIs, collect telemetry, or make network requests. See [PRIVACY.md](PRIVACY.md).

Manual fallback: download `manifest.json`, `main.js`, and `styles.css` from release `0.1.3`, place them in `<your-vault>/.obsidian/plugins/learning-practice-coevolution/`, restart Obsidian, and enable the plugin.

## What Material Can You Use?

| Material | Recommended input |
| --- | --- |
| Book, article, or course note | A target chapter, excerpt, highlights, or your own reconstruction |
| PDF / EPUB | Upload it and limit this round to specific pages or a chapter |
| WeRead or another reading app | Ask the agent to check accessible content; otherwise copy the table of contents, highlights, or notes |
| A finished book | Give your remembered thesis and questions; start with an understanding check |
| One concept | Add the real problem where you want to use it |
| Only a topic | Ask for a serial path that advances one small, finishable lesson at a time |

The agent does not automatically know what is inside your reading app. It must mark missing material and work only from content it can access.

## What Is In The Public Version?

The public version includes active recall, understanding critique, concept repair, transfer practice, serial lessons, learning feedback, observer reading recommendations, and method candidates.

It excludes private BP-Wiki project paths, dashboards, private learning logs, business examples, connector settings, internal runtime governance, secrets, account traces, and non-public knowledge.

## Repository Map

```text
learning-practice-coevolution/
├── SKILL.md / SKILL.en.md / SKILL.zh-CN.md    # Agent Skill
├── README.md / README.en.md / README.zh-CN.md # Project guides
├── USAGE.zh-CN.md                              # Chinese prompts and scenarios
├── agents/openai.yaml                          # Agent display metadata
├── manifest.json / main.js / styles.css        # Optional Obsidian plugin
├── PRIVACY.md                                  # Local privacy boundary
└── skill-package-manifest.json                 # Public package version and hashes
```

## Version Notes

- Early `v1.x` tags record skill-only public milestones.
- `0.1.x` releases contain installable Obsidian plugin assets.
- The current public description and skill content live on `main`; use `skill-package-manifest.json` for the package version and file hashes.

## Project Article And Support

- Chinese project article: [WeChat article](https://mp.weixin.qq.com/s/DO3uann8cmPEO0T5OtwY4w)
- Support and payment boundary: [SUPPORT.md](SUPPORT.md)

## License

MIT License. Copyright (c) 2026 Jie Huang.

Preserve the copyright and license notice when redistributing or adapting this skill.
