# Learning Practice Coevolution

<p align="center">
  <strong>中文</strong>
  |
  <a href="README.en.md"><strong>English</strong></a>
  |
  <a href="USAGE.zh-CN.md"><strong>直接看中文用法</strong></a>
</p>

> **让 AI 不替你读，而是陪你把知识讲清、用出来、练成自己的能力。**

这是一个开源的 AI 学习陪练 Skill。它把书、文章、PDF、课程、概念和真实任务，变成一条可反复运行的学习闭环：**你先复述，AI 再批改；修补理解后，立刻迁移到真实任务；最后用复盘决定下一步。**

核心是 Agent Skill；仓库里的 Obsidian 插件只是可选的本地提示词与学习记录工具，不会直接调用 AI。

## 你是不是也遇到过这些问题？

- 摘要看得很快，合上页面却讲不清核心观点。
- 收藏、划线和笔记越来越多，遇到真实问题还是不会用。
- AI 给出的答案很完整，但自己的判断力没有同步变强。
- 想系统学一个主题，却总在第一篇、第一章之后失去连续性。

真正的缺口不在摘要质量，而在于**知识进入之后，没有经过重构、纠错、迁移和反馈，因而没有变成能力。**

## 它和普通总结器有什么不同？

| 普通总结器 | Learning Practice Coevolution |
| --- | --- |
| AI 先给答案 | 你先用自己的话复述 |
| 重点是压缩内容 | 重点是暴露理解缺口 |
| 读完得到一份笔记 | 读完得到一次纠错和迁移练习 |
| 学习停在材料里 | 学习回到工作、项目或真实问题 |
| 下一轮重新开始 | 根据反馈调整下一步难度、例子和方向 |

## 一套闭环，三个角色

| 角色 | 它做什么 | 你得到什么 |
| --- | --- | --- |
| **Mentor / 导师** | 追问、批改复述，指出假熟悉、概念混淆和缺失例子 | 更真实的理解状态 |
| **Digital Apprentice / 数字学徒** | 在目标和边界明确后，把概念带进真实任务 | 一次可检验的迁移 |
| **Observer / 观察者** | 复盘结果、识别反复出现的盲区，建议下一次练习或针对性阅读 | 可持续的下一步 |

```text
材料或真实任务
-> 你先复述
-> Mentor 批改与概念修补
-> Digital Apprentice 做迁移练习
-> 在真实任务中检验
-> Observer 复盘并选择下一步
```

一次完整回合至少应留下四样东西：你的解释、被修正的缺口、一个真实迁移练习、下一步学习目标。

## 60 秒开始

如果你的 Agent 已经能调用本 Skill，直接发送：

```text
使用 $learning-practice-coevolution。

我正在读：{书 / 文章 / PDF / 课程笔记 / 概念}
我的真实目的：{我为什么要学它、准备把它用在哪里}
本轮范围：{一章 / 一组划线 / 某几页 / 一个概念}

请不要先总结。
先让我用自己的话复述，再批改我的理解。
修补概念后，给我一个能放进真实任务里的迁移练习。
最后告诉我下一步最值得练什么。
```

还没安装也可以先试：把 `SKILL.zh-CN.md` 或 `SKILL.md` 作为任务材料交给 Agent，再发送上面的提示词。

更多可复制场景见 [中文用法与提示词](USAGE.zh-CN.md)。

## 一个具体例子

你刚读完一本战略书，觉得“差异化”很好懂，但不知道怎么用在自己的项目里。

这个 Skill 不会先替你总结全书。它会：

1. 让你先解释“差异化”到底改变了什么选择；
2. 指出你把“不同”误当成“有价值的不同”的地方；
3. 让你用当前项目写出目标客户、取舍和验证信号；
4. 根据你的答案安排下一次练习，必要时给出一条窄范围荐读。

衡量结果的标准是：你能否在一个真实选择里正确使用这个概念。

## 适合谁？不适合谁？

适合：

- 读过不少内容，但讲不清或用不出来的人；
- 想用主动回忆、费曼式复述和真实任务练习来学习的人；
- 正在做项目，希望把阅读直接转成判断、研究或行动的人；
- 想持续学习一个主题，并让下一课真正读取上一轮反馈的人。

不适合：

- 只想立刻获得全文摘要，不愿先尝试复述；
- 希望 Agent 在看不到材料时假装读完整本书；
- 想把一次好答案直接固化成方法、SOP 或正式 Skill；
- 希望 Obsidian 插件自动读取全库、调用 AI 或上传笔记。

## 安装与验证

### 方式一：作为 Agent Skill 使用（核心）

如果你的 Agent 支持 Skills：

1. 下载或克隆本仓库。
2. 把 `SKILL.md` 与 `agents/openai.yaml` 放入该 Agent 文档指定的 Skill 目录。
3. 新开会话，调用 `$learning-practice-coevolution`。
4. 用“请不要先总结，先让我复述”做一次验证；如果 Agent 直接给全文摘要，说明 Skill 尚未正确加载或未被调用。

不同 Agent 的 Skill 目录不同，请以宿主工具自己的安装说明为准。

### 方式二：不安装，先试用

直接把 `SKILL.zh-CN.md` 或 `SKILL.md` 作为任务材料交给 Agent。确认工作流适合你之后，再安装。

### 方式三：安装 Obsidian 插件（可选）

在 Obsidian 中打开 **Settings → Community plugins → Browse**，搜索 `Learning Practice Coevolution`，安装并启用。

插件提供本地学习会话、复述提示词、迁移练习和观察者记录；它不读取 Copilot 设置、不调用 AI API、不收集遥测，也不发起网络请求。详见 [PRIVACY.md](PRIVACY.md)。

手动安装备用：从 release `0.1.3` 下载 `manifest.json`、`main.js` 和 `styles.css`，放入 `<your-vault>/.obsidian/plugins/learning-practice-coevolution/`，重启并启用插件。

## 你可以给它什么材料？

| 材料 | 建议做法 |
| --- | --- |
| 书、文章、课程笔记 | 给出目标章节、摘录、划线或你自己的复述 |
| PDF / EPUB | 上传文件，并限定本轮页码或章节 |
| 微信读书 | 已接入时先让 Agent 检查可访问范围；未接入时复制目录、划线或笔记 |
| 已读完的一本书 | 给出你记得的主张和疑问，从理解检查开始 |
| 一个概念 | 同时给出你准备使用它的真实问题 |
| 只有一个主题 | 让它设计连续小课，每次只推进一个可完成的学习单元 |

Agent 不会自动知道阅读 App 里的内容。材料不完整时，它必须标出缺口，只基于可见内容工作。

## 公开版包含什么？

公开版包含主动回忆、理解批改、概念修补、迁移练习、连续小课、学习反馈、观察者荐读和方法候选等核心流程。

它不包含私有 BP-Wiki 项目路径、Dashboard、私人学习日志、业务项目样例、连接器设置、内部 Runtime 治理、密钥、账号痕迹或非公开知识。

## 仓库结构

```text
learning-practice-coevolution/
├── SKILL.md / SKILL.en.md / SKILL.zh-CN.md   # Agent Skill
├── README.md / README.en.md / README.zh-CN.md # 项目说明
├── USAGE.zh-CN.md                              # 中文提示词与场景
├── agents/openai.yaml                          # Agent 展示元数据
├── manifest.json / main.js / styles.css        # 可选 Obsidian 插件
├── PRIVACY.md                                  # 本地隐私边界
└── skill-package-manifest.json                 # 公开包版本与哈希
```

## 版本说明

- 早期 `v1.x` tags 记录 Skill-only 的公开里程碑。
- `0.1.x` releases 对应可安装的 Obsidian 插件资产。
- 当前公开说明与 Skill 内容以 `main` 为准；可核验的包版本与文件哈希见 `skill-package-manifest.json`。

## 项目文章与支持

- 中文项目说明：[微信公众号文章](https://mp.weixin.qq.com/s/DO3uann8cmPEO0T5OtwY4w)
- 支持与付款边界：[SUPPORT.md](SUPPORT.md)

## License

MIT License. Copyright (c) 2026 Jie Huang.

分发或改编本 Skill 时，请保留版权和许可证声明。
