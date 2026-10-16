# Wendemachew Tsegaye — Portfolio

A modern, high-performance portfolio website built with the **MERN stack** (React 19, Vite, Tailwind CSS v4, Node.js, Express, and MongoDB).

---

## Features

- **Modern UI/UX**: Dark mode aesthetic with glassmorphism, ambient gradients, and responsive layouts.
- **Full-Stack JavaScript (MERN)**: React client with Node.js/Express backend API for contact messaging.
- **Curriculum Vitae (CV)**:
  - Downloadable PDF version (`Wendemu_Resume.pdf`)
  - Editable Microsoft Word document (`Wendemu_Resume.docx`)
  - Printable web version (`resume.html`)
- **Interactive Sections**: Filterable project gallery, categorized skill matrix, and verified contact channels.

---

## Project Structure

```text
client/                 React + Vite frontend (Tailwind CSS v4)
  src/components/       Hero, About, Services, Skills, Projects, Contact
  public/               Profile portrait, PDF resume, DOCX resume
  scripts/              generate-docx.js (Word document generator)
server/                 Node.js + Express API backend
  index.js              REST API routes, CORS & MongoDB connection
  User.js               Contact message model & schema
```

---

## Quick Start (Run Locally)

1. **Install dependencies:**
   ```bash
   npm install
   npm install --prefix client
   npm install --prefix server
   ```

2. **Configure environment:**
   ```bash
   cp server/.env.example server/.env
   cp client/.env.example client/.env.local
   ```

3. **Start the app:**
   ```bash
   npm run dev
   ```
   - Client: `http://localhost:5173` (or `http://localhost:5174`)
   - Server: `http://localhost:5000`

---

## Useful Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Run client and server concurrently |
| `npm run dev:client` | Run Vite frontend dev server |
| `npm run dev:server` | Run Express backend API |
| `npm run build` | Build production client bundle |
| `npm run generate:docx --prefix client` | Regenerate editable Word (`.docx`) resume |

---

## Author

**Wendemachew Tsegaye**  
- 3rd-Year Computer Science Student • Debark University  
- Full-Stack JavaScript (MERN) Developer & Digital Marketer  
- Email: [debuglife1221@gmail.com](mailto:debuglife1221@gmail.com)  
- GitHub: [@debug-life21](https://github.com/debug-life21)  
- LinkedIn: [wendmachew-tsegaye](https://linkedin.com/in/wendmachew-tsegaye)
