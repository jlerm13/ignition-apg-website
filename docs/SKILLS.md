# Design skills

All skills are installed at project level in `.claude/skills/`, so the repo records them. They were installed on 2026-10-12.

| Skill | Source | Commit | Version | Install method | Its one job here |
|---|---|---|---|---|---|
| Impeccable | github.com/pbakaus/impeccable | `245ad82def45831dc56a21b683c7a1ff530b06cc` | 4.5.2 | Instructions only: manual copy of `.claude/skills/impeccable/` from the repo, without the launcher | Stage 1: `init`, `shape`. Stage 4: `audit`, `critique`, `polish` |
| Unslop-UI | github.com/yuwen-lu/unslop-ui | `df1e58a1ab2e75beeaac295ec86c74b3824456db` | none stated | `npx skills@1.7.2 add yuwen-lu/unslop-ui -a claude-code --copy -y` | Stage 2: anti-slop rules for the directions |
| Taste Skill | github.com/Leonxlnx/taste-skill (`design-taste-frontend`) | `d237dd399d57524945c0c81327da5da19f7a468d` | v2 (experimental) | `npx skills@1.7.2 add Leonxlnx/taste-skill --skill design-taste-frontend -a claude-code --copy -y` | Stage 3: primary build rules |
| Hallmark | github.com/nutlope/hallmark | `13ac0ec7e148655948100b6396439e481361d690` | 1.1.0 | `npx skills@1.7.2 add nutlope/hallmark -a claude-code --copy -y` | Stage 2: themes for the four directions. Stage 4: `hallmark audit` |
| Kill AI Slop | github.com/yetone/kill-ai-slop | `f6e2ae32b30443ec7bd0da4da971ee18d8f8ffcb` | none stated | `npx skills@1.7.2 add yetone/kill-ai-slop -a claude-code --copy -y` | Stage 4: `scripts/scan.mjs` on the built site |
| UI UX Pro Max | not installed | | | | Skipped for version 1, as the brief says |

The installer records the four `npx skills` installs in `skills-lock.json` with content hashes.

## Notes

### Usage tracking

- Every `npx skills` command ran with `DISABLE_TELEMETRY=1 DO_NOT_TRACK=1`. The `skills` CLI otherwise sends anonymous install data.
- Keep these settings for any reinstall or update.

### Impeccable: instructions only (Jake's decision, 2026-10-12)

Impeccable's normal installer (`npx impeccable install`) does three things:

- It downloads a compiled program from GitHub.
- It installs an edit hook.
- It contacts impeccable.style when a new design starts. This happens even with tracking off.

Jake chose to install the written instructions only. The copy leaves out these files from `scripts/`:

- `impeccable` and `impeccable.cmd` (the launcher)
- `live-browser.js`, `live-browser-dom.js`, `live-browser-ignores.js`, and `live-browser-session.js` (live mode)
- `modern-screenshot.umd.js`

The copy keeps `SKILL.md`, `reference/`, `scripts/VERSION`, `scripts/command-metadata.json`, and `scripts/data/`.

The skill has a documented "Launcher unavailable" fallback, and we always use it. Two safeguards stop anyone running the program by accident:

- `.claude/settings.json` blocks `npx impeccable` and the launcher path.
- `CLAUDE.md` repeats the rule.

What we lose: Impeccable's automatic detector and its live mode. These checks cover that ground in Stage 4:

- Hallmark audit
- the Kill AI Slop scanner
- Lighthouse
- axe-core

### Unslop-UI has no directions feature

- The installed version is a rule set only. It does not propose directions.
- As the brief allows, Stage 2 uses Hallmark themes for the four directions.
- Unslop-UI rules still apply as a filter on each direction.
- The installer copied the whole repo root. `skills/unslop-ui/SKILL.md` is an identical copy of the top-level `SKILL.md`.

### Taste Skill: local edit and overrides

- **Local edit:** the dials near the top of `.claude/skills/design-taste-frontend/SKILL.md` were changed:
  - from the upstream baseline `8 / 6 / 4`
  - to `6 / 3 / 4` (DESIGN_VARIANCE, MOTION_INTENSITY, VISUAL_DENSITY), as the brief asks
  - A reinstall or update overwrites this edit. Reapply it.
- **Overridden by the hard rules and stack:**
  - picsum placeholder photos and any stock photography
  - Simple Icons CDN and other CDNs
  - GSAP, React, and Motion libraries
  - shadcn and other component kits
  - font CDNs

### Hallmark

- `hallmark audit` reports only. It does not edit.
- `hallmark study` fetches a web page only when given a URL. We do not use it.
- Its typography notes mention font CDNs such as Fontshare. We self-host fonts through Fontsource instead.

### Kill AI Slop

- `scripts/scan.mjs` was read before install. It has no dependencies and reads files only. It never edits files and makes no network calls.
- By default it skips folders named `dist`, so point it directly at the built site folder.
- Its own test file, `scripts/scan.test.mjs`, is not needed for our use.

## Reading skills before use

- Each SKILL.md was reviewed before install.
- Before a skill runs in a later stage, read its SKILL.md and the reference files for the command in use.
- If any skill asks to send data anywhere or download unknown files, stop and tell Jake.
