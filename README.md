# Guilherme Dio | Website

A premium, high-performance professional portfolio and Knowledge Hub built for a modern Data Architect. This SPA (Single Page Application) bridges the gap between a technical resume and an active professional presence on LinkedIn.

🚀 **Live Site:** [ggdio.github.io](https://ggdio.github.io/)

---

## 🛠 Tech Stack

- **Framework:** [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** GitHub Actions + GitHub Pages

---

## ✨ Key Features

- **Executive Dashboard Layout:** A dark-themed, glassmorphic UI designed for high-end professional impact.
- **Knowledge Hub:** Dynamic mapping of LinkedIn articles with deep-link integration.
- **Dual-View Experience:**
  - _Highlights:_ High-impact roles with detailed metrics.
  - _Full Timeline:_ A comprehensive career journey spanning 15+ years.
- **Smart Skills Grid:** Categorized competencies (Cloud, Data, Architecture, Software, etc.) for quick scanning.
- **Social Connectivity:** A floating, non-intrusive social bar for LinkedIn, GitHub, Email, and WhatsApp.
- **CI/CD Pipeline:** Fully automated build and deployment via GitHub Actions.

---

## 📂 Project Structure

```text
src/
├── components/          # React components (Experience, Skills, UI, etc.)
├── data/               # The Source of Truth (JSON/JS Data)
│   ├── resumeData.js   # Professional info and skill-set
│   └── linkedinData.json # Articles and recommendations
├── assets/             # Images and global styles
└── App.jsx             # Main application orchestrator
```

---

## 🔧 Maintenance & Updates

This site is designed to be **Data-First**. You can update your entire portfolio without touching a single line of UI logic:

1.  **Update Resume/Skills:** Edit `src/data/resumeData.js`.
2.  **Add Articles/Recommendations:** Update `src/data/linkedinData.json`.
3.  **Deploy:** Simply `git push` to the `main` branch. The GitHub Action will handle the build and deployment automatically.

---

## 💻 Local Development

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Run development server:**
    ```bash
    npm run dev
    ```
3.  **Build project:**
    ```bash
    npm run build
    ```
4.  **Preview production build:**
    ```bash
    npm run preview
    ```

---

## 🔒 License

© 2026 Guilherme Dio. All rights reserved.
