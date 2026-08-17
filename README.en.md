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

## Important boundary

This is an independent community catalog, not an official DeepSeek project or security audit. A successful `dsh plugin add` command is not proof that a plugin is compatible or safe. Pin versions, read the source, review patch/build scripts, and test in a disposable profile first.

## License

The catalog and documentation are MIT-licensed. Individual plugins retain their original licenses.
