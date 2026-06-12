# Learning Practice Coevolution

Reading is training. Practice is learning.

`learning-practice-coevolution` is an agent skill for turning books, articles, course notes, excerpts, highlights, and real work into active recall, critique, transfer practice, learning records, and reusable learning assets.

It is designed for people who do not want AI to simply summarize material for them. The skill keeps the user in charge of the problem, uses AI as mentor before execution, and only switches to execution after the learning or problem contract is clear.

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
- `agents/openai.yaml` - optional OpenAI-facing display metadata.
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

## License

MIT License. Copyright (c) 2026 Jie Huang.

Attribution and license notice must be preserved when redistributing or adapting this skill.
