const { Notice, Plugin, normalizePath } = require("obsidian");

const PLUGIN_ROOT = "Learning Practice Companion";

module.exports = class LearningPracticeCompanionPlugin extends Plugin {
  async onload() {
    this.addRibbonIcon("book-open", "Learning Practice Companion", () => this.openHome());

    this.addCommand({
      id: "open-learning-home",
      name: "Open learning practice home",
      callback: () => this.openHome()
    });

    this.addCommand({
      id: "start-learning-session",
      name: "Start learning session",
      callback: () => this.startLearningSession()
    });

    this.addCommand({
      id: "insert-reconstruction-prompt",
      name: "Insert reconstruction prompt",
      editorCallback: (editor) => this.insertAtCursor(editor, reconstructionPrompt())
    });

    this.addCommand({
      id: "insert-copilot-mentor-prompt",
      name: "Insert Copilot mentor prompt",
      editorCallback: (editor) => this.insertAtCursor(editor, copilotMentorPrompt())
    });

    this.addCommand({
      id: "insert-transfer-test",
      name: "Insert transfer and misuse test",
      editorCallback: (editor) => this.insertAtCursor(editor, transferTestTemplate())
    });

    this.addCommand({
      id: "close-as-observer-note",
      name: "Close as observer note",
      editorCallback: (editor) => this.insertAtCursor(editor, observerNoteTemplate())
    });
  }

  async openHome() {
    await this.openOrCreateFile(`${PLUGIN_ROOT}/README.md`, homeContent());
  }

  async startLearningSession() {
    const now = new Date();
    const stamp = formatDateTime(now);
    const path = `${PLUGIN_ROOT}/Sessions/Learning Session - ${stamp}.md`;
    await this.openOrCreateFile(path, learningSessionContent(now));
    new Notice("Learning session created.");
  }

  insertAtCursor(editor, text) {
    const current = editor.getCursor();
    editor.replaceRange(text, current);
  }

  async openOrCreateFile(path, content) {
    await this.createFileIfMissing(path, content);

    const normalizedPath = normalizePath(path);
    const file = this.app.vault.getAbstractFileByPath(normalizedPath);
    if (file) {
      await this.app.workspace.getLeaf(false).openFile(file);
    }
  }

  async createFileIfMissing(path, content) {
    const normalizedPath = normalizePath(path);
    const existing = this.app.vault.getAbstractFileByPath(normalizedPath);

    if (!existing) {
      await this.ensureParentFolder(normalizedPath);
      await this.app.vault.create(normalizedPath, content);
    }
  }

  async ensureParentFolder(path) {
    const parts = path.split("/");
    parts.pop();
    if (parts.length > 0) {
      await this.ensureFolder(parts.join("/"));
    }
  }

  async ensureFolder(path) {
    const normalizedPath = normalizePath(path);
    if (!normalizedPath) return;

    const parts = normalizedPath.split("/");
    let current = "";

    for (const part of parts) {
      current = current ? `${current}/${part}` : part;
      const existing = this.app.vault.getAbstractFileByPath(current);
      if (!existing) {
        await this.app.vault.createFolder(current);
      }
    }
  }
};

function formatDateTime(date) {
  const pad = (value) => String(value).padStart(2, "0");
  return [
    date.getFullYear(),
    pad(date.getMonth() + 1),
    pad(date.getDate())
  ].join("-") + " " + [pad(date.getHours()), pad(date.getMinutes())].join("");
}

function homeContent() {
  return `# Learning Practice Companion

Learning Practice Companion is a local-first workflow companion for active recall, AI critique, transfer practice, and learning session records.

It pairs well with Copilot for Obsidian, but it does not depend on Copilot, read Copilot settings, call any AI API, or make network requests.

## Commands

- Start learning session
- Insert reconstruction prompt
- Insert Copilot mentor prompt
- Insert transfer and misuse test
- Close as observer note

## Workflow

1. Start with a real task or question.
2. Reconstruct your understanding before asking AI for an answer.
3. Use Copilot or another AI tool to critique the reconstruction.
4. Convert the correction into one transfer practice.
5. Close the session with an observer note.

## Boundary

The plugin creates local Markdown only. It does not promote notes into formal knowledge, methods, SOPs, or skills.
`;
}

function learningSessionContent(date) {
  return `---
type: learning_session
created: ${date.toISOString()}
status: active
---

# Learning Session - ${formatDateTime(date)}

## 1. Real Task Or Question


## 2. Source Material

- Type:
- Access: full | partial | metadata_only | unavailable
- Gaps:

## 3. Blank-Page Reconstruction

Explain the idea before asking AI to summarize it.


## 4. Mentor Review Prompt

${copilotMentorPrompt()}

## 5. Transfer / Misuse Test

${transferTestTemplate()}

## 6. Observer Note

${observerNoteTemplate()}
`;
}

function reconstructionPrompt() {
  return `## Blank-Page Reconstruction

Before reading a summary or asking for a polished answer:

1. What is the material trying to explain?
2. What can I explain in my own words?
3. What example can I give?
4. Where am I vague?
5. Where could this idea fail or be misused?

`;
}

function copilotMentorPrompt() {
  return `\`\`\`text
Use the Learning Practice Coevolution posture.

Do not summarize first. Read my reconstruction and critique it.

Please identify:
1. What is correct.
2. What is vague.
3. What assumption is unsupported.
4. What example or counterexample is missing.
5. What one transfer exercise should I do next.

If you recommend reading, make it a reading prescription:
- observed gap
- book/chapter/concept/paper
- why this fits the gap
- narrow scope
- practice after reading

Do not give a generic book list.
\`\`\`
`;
}

function transferTestTemplate() {
  return `## Transfer / Misuse Test

- Transfer target:
- One toy example:
- One real-task application:
- One counterexample:
- Misuse boundary:
- Next practice:

`;
}

function observerNoteTemplate() {
  return `## Observer Note

\`\`\`yaml
observer_recommendation:
  observed_gap: ""
  why_it_matters: ""
  recommended_reading:
    - title: ""
      scope: ""
      why_this: ""
      practice_after_reading: ""
  recommended_practice:
    - ""
  action_status: candidate
\`\`\`

Keep, defer, or discard this recommendation after review.

`;
}
