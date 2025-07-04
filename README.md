# React Basics

This is a React-based learning resource for React fundamentals, deployed automatically to GitHub Pages using GitHub Actions.

---

## 🚀 Project Overview

- Built with **React** and **Tailwind CSS** for modern web development learning
- Hosted on GitHub Pages: [https://abshetty.in/react-basics/](https://abshetty.in/react-basics/)
- Fully **automated deployment** on every push to the `main` branch via GitHub Actions (workflow file is already included in this repo at `.github/workflows/deploy.yml`)

---

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/ab007shetty/react-basics.git && cd react-basics
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

---

## 📦 Installation from Scratch

If you want to recreate this project from scratch, follow these steps:

### 1. Create Vite Project

```bash
# Create a new Vite project with React template
npm create vite@latest react-basics -- --template react
cd react-basics
npm install
```

### 2. Install Tailwind CSS

```bash
# Install Tailwind CSS and its dependencies
npm install -D tailwindcss postcss autoprefixer

# Generate Tailwind config files
npx tailwindcss init -p
```

---

## 🔧 Project Configuration

- Make sure the `"homepage"` field in `package.json` is set as follows (adjust for your repo):

```json
"homepage": "https://ab007shetty.github.io/react-basics/"
```

- The `dist/` folder is included in `.gitignore` since it is generated automatically.

---

## 📦 Manual Deployment (Optional)

If you want to deploy manually instead of relying on GitHub Actions, run:

```bash
npm run deploy
```

This builds the app and pushes the `dist/` folder to the `gh-pages` branch on GitHub.

---

## 📂 GitHub Actions Automatic Deployment

- The workflow file `.github/workflows/deploy.yml` is already included in this repo.
- On every push to the `main` branch, GitHub Actions:
  - Installs dependencies
  - Runs the build script
  - Deploys the site to GitHub Pages by pushing the `dist/` folder to the `gh-pages` branch
- This means **no manual deploy commands needed** after setup—just push your code!

---

## 🛠 GitHub Pages Settings

Make sure GitHub Pages is configured correctly in your repo:

1. Go to **Settings > Pages**.
2. Set **Source** to:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
3. Save changes.

Your site will then be live at:
`https://<your-github-username>.github.io/<repo-name>/`

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
