# ☕ CodeNeedsCoffee Website Codebase

Welcome to the **CodeNeedsCoffee** site codebase!
This project is my personal developer portfolio and playground — built with **React**, **Vite**, **HeroUI**, and **TailwindCSS**. It serves as both a showcase of my work and a testing ground for new design and UI ideas.

The site highlights my projects, skills, and ongoing experiments in modern web development. You can explore the codebase, use it as inspiration, or fork it to build your own developer portfolio.

---

## 🚀 Features

* **HeroUI + Tailwind** styling for fast, modern, and responsive design
* **Dark/Light mode** toggle synced to your system preferences
* **Optimized with Vite** for lightning-fast builds
* **Deployed via Cloudflare Pages** for speed and reliability
* Clean, minimal developer-focused design

---

## 🛠️ Tech Stack

* **Framework:** React + TypeScript
* **UI Components:** [HeroUI](https://www.heroui.com)
* **Styling:** [Tailwind CSS](https://tailwindcss.com)
* **Build Tool:** [Vite](https://vite.dev)
* **Deployment:** [Cloudflare Workers](https://github.com/cloudflare/templates/tree/v5.6.1/vite-react-template)

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/CodeNeedsCoffee/CodeNeedsCoffee-Site.git
```

Navigate to the project directory:

```bash
cd CodeNeedsCoffee-Site
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

---

## 💾 Production

Build your project for production:

```bash
npm run build
```

Preview your build locally:

```bash
npm run preview
```

Deploy your project to Cloudflare Workers:

```bash
npm run build && npm run deploy
```

Monitor your workers:

```bash
npx wrangler tail
```


## 🌗 Theme

This project includes a fully functional light/dark theme switcher powered by Tailwind’s `darkMode: "class"` configuration and HeroUI’s color tokens.

Your theme preference is automatically synced with your system setting on initial load.

---

## 📂 Project Structure

```
src/
├── react-app/
│   ├── App.tsx              # Main React component
│   ├── hooks/useTheme.ts    # Theme management hook
│   ├── ThemeWrapper.tsx     # Theme context provider
│   └── main.tsx             # Entry point
├── assets/                  # Static images and logos
└── App.css                  # Global styles
```

---

## 💻 Developer

**👋 Evan Templin (CodeNeedsCoffee)**
Developer • Home Automation Enthusiast • Builder of Helpful Tools

* 🌐 [Website](https://codeneedscoffee.com)
* 🧠 Focus: Acumatica customization, Node.js, and web automation
* ☕ Motto: *Code runs on coffee.*

---

## 📜 License

This project is licensed under the [MIT License](./LICENSE).

---

### 💡 Contributing

If you’d like to make suggestions, improvements, or just share feedback, feel free to open an issue or submit a PR. I love connecting with other developers who enjoy clean, meaningful code.
