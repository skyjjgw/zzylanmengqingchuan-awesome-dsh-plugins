# Awesome DSH Plugins — Curated

A small, evidence-aware shortlist of useful plugins for DeepSeek Harness (DSH).

This is intentionally **not** another giant copy of every repository carrying the `dsh-plugin` topic. Existing directories are good at discovery; this project focuses on the next question:

> If I only have 30 minutes, what should I inspect first, what will it change, and what can go wrong?

Each entry records the source repository, package/install path, compatibility evidence, data and permission boundaries, known limitations, and a verification level. See the Chinese README for the current curated list and [selection policy](docs/selection-policy.md).

## Verification levels

- ✅ **Locally installed and used** — evidence from a real local profile; not a universal compatibility claim.
- 🧪 **Locally installed/configured** — present in a local profile, but not written up as a complete feature test.
- 📖 **Source/README reviewed** — original repository documentation and manifest reviewed; no install smoke test by this catalog yet.
- 👀 **Watchlist** — interesting, but installability, maintenance, compatibility, or security evidence is insufficient.

## Maintainer-authored plugins

These three plugins were developed by the maintainer of this catalog and are currently linked and bundled in the local DSH Web profile. They are recorded as **locally installed/configured**, not as universal compatibility guarantees:

- [dsh-session-pin](https://github.com/zzylanmengqingchuan/dsh-session-pin) — pins important sessions in the sidebar.
- [dsh-question-index](https://github.com/zzylanmengqingchuan/dsh-question-index) — indexes questions in the current session with search, jump, history loading, and highlighting.
- [dsh-session-rename](https://github.com/zzylanmengqingchuan/dsh-session-rename) — edits the current session title and syncs it to the sidebar.

All three intentionally avoid changing session type, standard / Think / Bash modes, model selection, agent execution logic, and original message content. Read each plugin's README and patch file before installing.

## Important boundary

This is an independent community catalog, not an official DeepSeek project or security audit. A successful `dsh plugin add` command is not proof that a plugin is compatible or safe. Pin versions, read the source, review patch/build scripts, and test in a disposable profile first.

## License

The catalog and documentation are MIT-licensed. Individual plugins retain their original licenses.
