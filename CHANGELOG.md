# Changelog

## 2026-06-30 - Obsidian Community Plugin Submission

- Renamed the Obsidian plugin surface from `Learning Practice Companion` to `Learning Practice Coevolution`.
- Changed the plugin id from `learning-practice-companion` to `learning-practice-coevolution` before community listing.
- Bumped the Obsidian plugin version to `0.1.1` and prepared release assets for community plugin installation.
- Published the plugin listing on Obsidian Community and changed README installation guidance to the Community plugins path, with GitHub release files as the manual fallback.

## 2026-06-30 - Public README Usage Flow

- Reworked the public README files as user onboarding pages instead of architecture-first pages.
- Added explicit setup guidance: Agent and this Skill are required; Reader and Knowledge Base are optional.
- Added material entry flow for WeRead, PDF / EPUB, finished books, concepts, and topic-only serial learning.
- Added `USAGE.zh-CN.md` with copy-ready Chinese prompt recipes and material incompleteness boundaries.
- Kept Obsidian as an optional workspace rather than a requirement.
- Tightened the public writing style around real user problems, reducing feature-list and process-heavy wording.
- Kept this as a documentation-only public release; core Skill behavior was not changed.

## 2026-06-30 - Feedback-Driven Serial Lesson Adapter

- Added a public-safe Serial Lesson Adapter for long-running lesson or article sequences.
- Added feedback extraction rules so the next lesson uses real user feedback instead of template prompt lines.
- Added ZPD-based next lesson routing, remedial micro-lessons, lesson archives, topic learning profiles, and stage reviews.
- Updated README files and OpenAI display metadata to describe feedback-driven serial lessons.
- Kept the public version host-neutral: no private paths, connector configuration, dashboard rules, private project examples, or proprietary runtime metadata.

## 2026-06-20 - Obsidian Plugin Community Candidate

- Added the first local-first Obsidian plugin implementation: `Learning Practice Companion`.
- Added `manifest.json`, `main.js`, `styles.css`, `versions.json`, and `PRIVACY.md` for community plugin packaging.
- Added commands for learning sessions, reconstruction prompts, Copilot mentor prompts, transfer tests, and observer notes.
- Updated README files to explain manual installation and privacy boundaries.

## 2026-06-19 - Observer Reading Prescription Update

- Added Observer reading prescription guidance for repeated thinking or analysis gaps.
- Scoped recommendations to a demonstrated gap, narrow reading target, and follow-up practice.
- Updated README files and skill snapshots so public users can use recommendations without turning them into generic book lists.

## 2026-06-15 - Public Boundary Wording Cleanup

- Removed implementation-specific boundary wording from public documentation.
- Replaced adapter-oriented language with generic usage and confidentiality boundaries.

## 2026-06-15 - Philosophy Explanation Alignment

- Rewrote the Chinese and English entry descriptions to explain how "reading as training, practice as learning" works.
- Aligned the README and skill core-idea loops around reconstruction, critique, transfer practice, real-task testing, observation, and reusable asset candidates.

## 2026-06-15 - Chinese Core Slogan Update

- Updated the Chinese core slogan to `核心理念：阅读即训练，实践即学习。`.

## 2026-06-15 - Public Positioning Update

- Expanded public documentation from "reading assistant" to a learning-practice coevolution workflow.
- Documented the three-layer positioning: single-session learning, long-running learning, and real-work practice.
- Added public skill guidance for SQ3R / Cornell active-reading micro-patterns.
- Added public skill guidance for real-work research practice: decision questions, hypothesis trees, evidence plans, method lenses, and Observer recommendations.
- Kept setup guidance generic and focused on the published skill package.

## 2026-06-15 - Core Idea and Usage Update

- Added explicit `Core Idea` and `How To Use This Skill` sections to the main and language-specific skill files.
- Updated README files so GitHub visitors can see the core learning loop and usage boundary from the repository homepage.
- Refreshed OpenAI-facing display metadata.
- Preserved MIT public repository metadata and manifest verification.

## 2026-06-13 - Cropped Alipay QR

- Replaced the full Alipay screenshot with a cropped QR-only image asset.
- Removed visible Alipay banner text, recommendation text, bottom nickname, and scan instruction from the published QR image.
- Matched Alipay and PayPal QR display widths across README and SUPPORT pages.

## 2026-06-12 - Alipay QR and Chinese-friendly landing

- Replaced the mainland China support QR with a user-provided Alipay QR image.
- Removed the previous mainland China QR asset from the current package manifest.
- Added a clearer Chinese quick explanation to the main README.
- Added prominent `中文 | English` language switching links across README files.
- Added the public WeChat article link as the Chinese project explanation entry.

## 2026-06-12 - Bilingual docs and support links

- Added English and Simplified Chinese entry documents: `README.en.md`, `README.zh-CN.md`, `SKILL.en.md`, and `SKILL.zh-CN.md`.
- Added `SUPPORT.md` and `.github/FUNDING.yml` with mainland China and international support links.
- Added QR assets for mainland China and PayPal support.
- Kept payment boundaries explicit: no payment passwords, API keys, Stripe secret keys, bank-card data, private account screenshots, or hidden checkout automation are included.

## 2026-06-12 - Public open-source release

- Published `learning-practice-coevolution` as a standalone open-source skill.
- Converted the external share boundary from proprietary evaluation to MIT open source.
- Kept the core learning workflow intact: Mentor, Digital Apprentice, Observer, Learning Workspace Adapter, Learning Record, and Learning Session Record.
- Replaced local workspace path examples with generic workspace placeholders.
- Added public README, LICENSE, and MANIFEST files.
