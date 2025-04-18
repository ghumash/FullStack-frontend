# 🧩 FullStack Frontend

A modern, production-ready frontend for a fullstack application using clean architecture, feature-based project structure, and the latest UI/UX tools.

## 🌐 Tech Stack

This project uses the following technologies:

- **React** — modern JavaScript UI library
- **Vite** — blazing-fast frontend tooling
- **Zustand** — global state management
- **SWR** — React hooks for remote data fetching
- **Zod** — schema validation
- **react-hook-form** — performant forms with validation
- **axios** — HTTP client
- **clsx** — conditional class utility
- **shadcn/ui** — beautifully designed UI components
- **Lucide icons** — customizable SVG icons
- **Prettier** — code formatter
- **ESLint** — linter with Prettier integration
- **Tailwind CSS** — (initially removed, uses pure modern CSS)
- **Vite aliases** — for cleaner imports
- **Sentry** — real-time error tracking and monitoring
- **Vercel** — frontend deployment platform

## 🏗️ Architecture

The project follows a **Feature-Sliced Design (FSD)**-inspired architecture in a **simplified and improved** form. Main layers include:

- `app` — application entry, providers
- `shared` — reusable code: UI, libs, constants, assets
- `entities` — base business entities (e.g., User)
- `features` — standalone logic units (e.g., login, registration)
- `widgets` — composite blocks (e.g., navigation, layout)
- `pages` — route-level components
- `processes` — global flows (auth, theming)

All layers are loosely coupled and reusable across the application.

## 🔐 Authentication

- JWT-based authentication
- Access token stored in `httpOnly` cookies
- Refresh token auto-handled with `axios-auth-refresh`
- AuthGuard and RoleGuard implemented on the client
- Pages like `/login`, `/register` are **guest-only**
- `/dashboard/users` is protected and only visible to `admin` users

## 👤 Users Table

Admin users can:

- View all registered users
- Create new users
- Edit user info (except password)
- Delete users
- Search, filter, and paginate
- Import users via CSV/Excel
- See form validation via `zod` + `react-hook-form`

## ⚠️ Sentry Integration

Sentry is configured for both frontend and backend. It automatically captures:

- Runtime errors
- Console errors
- Network request failures
- Manual test endpoint (`/debug-sentry`) for verification

## 🔧 Project Setup

- `pnpm` is used as the package manager
- Environment variables are defined in `.env` and `.env.example`
- Axios uses `withCredentials: true`
- Prettier formatting is enforced project-wide
- Linting and formatting are aligned with best practices

## 🌍 Deployment

- **Frontend** is deployed on [Vercel](https://vercel.com/)
- **Backend** is deployed on [Render](https://render.com/)
- Uses `.vercel.json` with proper rewrites for SPA routing
