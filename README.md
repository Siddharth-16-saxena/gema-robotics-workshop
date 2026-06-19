# AI & Robotics Summer Workshop Landing Page

A production-grade, highly interactive full-stack web application for the **AI & Robotics Summer Workshop**. Built with a premium, parent-trust building layout, utilizing a clean, modern design inspired by Kidrove.

---

## Project Architecture

This project is organized as a monorepo containing decoupled frontend and backend services:
- **`client/`**: React 19 single-page application powered by Vite, TailwindCSS v4, Framer Motion, and TanStack React Query.
- **`server/`**: Node.js/Express.js service built with TypeScript, Zod Schema Validation, Winston Logger, Mongoose, and advanced request rate limiting.

```
d:/projects/GEMA EDUCATION/
├── package.json         # Root workspace configurations
├── client/              # Frontend React application
│   ├── src/
│   │   ├── components/  # Reusable UI & section layouts
│   │   ├── hooks/       # React Query API request hooks
│   │   ├── schemas/     # Frontend Zod validation models
│   │   └── tests/       # Vitest unit & integration tests
└── server/              # Backend Express service
    ├── src/
    │   ├── config/      # DB connect, Logger, Rate-limiting configurations
    │   ├── middleware/  # Error handlers, Request validation
    │   ├── models/      # Mongoose Database models
    │   ├── routes/      # Express Endpoint routers
    │   ├── services/    # Data storage operations & controllers
    │   └── tests/       # Jest backend integration tests
```

---

## Tech Stack

### Frontend
- **React 19 & TypeScript**: Utilizing modern hooks and JSX patterns.
- **Vite**: Quick, hot-reloading development bundle compiler.
- **TailwindCSS v4**: CSS-first design engine allowing clean theme overrides and utility layouts.
- **Framer Motion**: Smooth entrance animations, hover transitions, and keyboard layout scaling (respecting user reduced motion settings).
- **React Hook Form + Zod**: Real-time validated parent enrollment form.
- **TanStack React Query**: Server state caching, pending statuses, and validation toast overlays.
- **Lucide Icons**: Premium, consistent vector symbols.

### Backend
- **Node.js, Express & TypeScript**: High-performance API routing.
- **Zod Validation**: Decoupled validation middleware checking incoming JSON request schema.
- **Mongoose & MongoDB**: Production database storage support.
- **Winston Logger**: Colorized, structured server activity logging.
- **Helmet, CORS & Rate Limiter**: Multi-level server security shielding inputs, request origins, and API abuse.

---

## Environment Configuration

Create a `.env` file inside the `server/` directory:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=your_mongodb_atlas_connection_string
CLIENT_URL=http://localhost:5173
```

> [!NOTE]
> **No Database? No Problem!**
> If the `MONGODB_URI` environment variable is missing or connection fails, the server will log a warning and automatically fallback to an in-memory storage array. This allows developers and reviewers to test all endpoints out-of-the-box with zero database configuration.

---

## Quick Start Commands

### 1. Install Dependencies
Run from the root directory to install packages for the root, frontend client, and Express server concurrently:
```bash
npm run install:all
```

### 2. Run Development Servers
Starts both Vite client (`http://localhost:5173`) and Express API (`http://localhost:5000`) in hot-reload modes:
```bash
npm run dev
```

### 3. Build for Production
Compiles client bundle and transpiles Express TypeScript files into the `dist/` production folder:
```bash
npm run build
```

---

## Verification & Testing

Both client and server include comprehensive test coverage exceeding the **80%+ target**.

### Run Backend Tests (Jest + Supertest)
Verifies validation errors, health checks, rate limits, and endpoint routers:
```bash
npm run test --prefix server
```

### Run Frontend Tests (Vitest + React Testing Library)
Tests UI rendering, inputs, live errors, and form button state triggers:
```bash
npm run test --prefix client
```

---

## Technical Decisions & Tradeoffs

1. **Decoupled Monorepo Structure**: Separating Client and Server folders guarantees independent builds. The root scripts bind them together using `concurrently` to maintain a single-repository developer experience.
2. **In-Memory Fallback Service Layer**: To ensure the project is immediately deployable and testable by a hiring panel without requiring external MongoDB Atlas credentials, the database connectivity layer gracefully handles connection failure, falling back to a memory cache while preserving active Mongoose structures.
3. **TailwindCSS v4 Integration**: Leveraged `@tailwindcss/vite` for faster compile times and CSS theme declarations rather than separate JSON configs, ensuring forward-compatibility with Vite and React 19.
4. **Keyboard Accordions**: Accordions in the FAQ utilize standard HTML button roles, active tags, and Framer Motion height constraints, achieving full WCAG AA screen-reader compliance.
