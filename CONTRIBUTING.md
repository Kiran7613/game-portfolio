# 🤝 Contributing to Veil of Fate Portfolio

Thank you for your interest in contributing to **Veil of Fate**! Whether you're a designer, developer, 3D artist, or sound engineer — your collaboration is welcome.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Branching Strategy](#branching-strategy)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Pull Request Process](#pull-request-process)
- [Asset Contribution Guidelines](#asset-contribution-guidelines)

---

## 📜 Code of Conduct

By participating in this project, you agree to maintain a respectful and collaborative environment. Harassment, discrimination, or disruptive behavior of any kind will not be tolerated.

---

## 💡 How Can I Contribute?

### 🎨 Creative / Art
- Character concept art and design
- Environment mood boards and scene concepts
- Storyboard panels and cinematic layouts
- UI/UX design for the portfolio site

### 🖥️ Development
- Bug fixes or improvements to the React portfolio site
- Performance optimizations
- Accessibility improvements
- New interactive features or animations

### 🎵 Sound & Music
- Ambient soundscapes or background score concepts
- Sound effect design

### 📝 Documentation
- Improving the README, wiki, or in-code comments
- Translating documentation

---

## 🚀 Getting Started

1. **Fork** the repository
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/game-portfolio.git
   cd game-portfolio
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the dev server:**
   ```bash
   npm run dev
   ```
5. Create a new branch for your changes (see [Branching Strategy](#branching-strategy))

---

## 🌿 Branching Strategy

Use descriptive branch names based on the type of change:

| Type | Branch Format | Example |
|---|---|---|
| New feature | `feature/short-description` | `feature/hero-animation` |
| Bug fix | `fix/short-description` | `fix/mobile-nav-overflow` |
| Asset addition | `assets/short-description` | `assets/character-sketches-v2` |
| Documentation | `docs/short-description` | `docs/update-readme` |

```bash
git checkout -b feature/your-feature-name
```

---

## ✍️ Commit Message Guidelines

Follow the **Conventional Commits** format:

```
<type>(<scope>): <short summary>
```

**Types:**
- `feat` — New feature or content
- `fix` — Bug fix
- `docs` — Documentation only
- `style` — Formatting, no logic change
- `refactor` — Code refactor
- `assets` — Adding or updating visual assets
- `chore` — Build process or tooling changes

**Examples:**
```
feat(portfolio): add cinematic teaser section
fix(nav): resolve mobile menu overlap issue
assets(storyboards): add midBombBlast scene sketch
docs(readme): update roadmap with Phase 2 details
```

---

## 🔀 Pull Request Process

1. Ensure your branch is up to date with `main`:
   ```bash
   git fetch origin
   git rebase origin/main
   ```
2. Run the build to confirm nothing is broken:
   ```bash
   npm run build
   ```
3. Open a Pull Request with:
   - A **clear title** describing your change
   - A **description** of what was changed and why
   - Screenshots or previews for any visual changes
4. PRs will be reviewed by the maintainer within a few days
5. Once approved, your contribution will be merged and credited

---

## 🖼️ Asset Contribution Guidelines

- All submitted assets must be **original work** or under a license that permits use in this project
- Images should be placed in the appropriate subfolder under `/assets/`
  - Storyboards → `/assets/storyboards/`
  - Cinematic art → `/assets/cinematic/`
  - Character art → `/assets/characters/`
- Use descriptive file names in `camelCase` (e.g., `protagonistSketch_v2.png`)
- Preferred formats: `.png` for art/renders, `.jpg` for photos, `.svg` for icons/UI

---

## 📫 Questions?

Reach out directly:

**Vamsi Kiran Kuchibhatla**  
📧 vamsikirankuchibhatla8093@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/vamsi-kiran-kuchibhatla/)

---

*Thank you for helping bring Veil of Fate to life! 🎭*
