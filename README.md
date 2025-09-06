# Elixir + Phoenix LiveView + React + Vite + shadcn/ui Project Template

This repository is a **modern full‑stack project template** that combines the
power of **Elixir** and **Phoenix LiveView** with the flexibility of **React**
and the speed of **Vite**. It also comes pre‑configured with
[shadcn/ui](https://ui.shadcn.com/) for a beautiful, accessible, and consistent
component library.

The goal of this template is to give you a **production‑ready starting point**
for building interactive, real‑time web applications with a clean developer
experience.

---

## 🔥 Tech Stack

- **Elixir** – functional programming language for scalable, fault‑tolerant apps
- **Phoenix Framework 1.7** – backend web framework with LiveView for real‑time UI
- **Phoenix LiveView** – server‑rendered, real‑time UI without writing JS
- **React + Vite + TypeScript** – modern frontend stack
- **shadcn/ui** – headless, accessible UI components built on Radix and Tailwind
- **PostgreSQL** – database via Ecto + Postgres driver
- **Absinthe** – GraphQL API support

---

## 🚀 Features

- Preconfigured **Elixir + Phoenix** backend
- **LiveView** for real‑time updates without page reloads
- **React + Vite** integration for modern frontend workflows
- **shadcn/ui** components for consistent design
- **GraphQL API** support with Absinthe
- Hot‑reloading for both backend and frontend
- Project generator script (`create_project.exs`) found in releases to quickly
  bootstrap new apps
- Developer‑friendly **Mix aliases** for setup, assets, and CI/CD

---

## 📦 Getting Started

### 1. Generate a New Project

Use the included script to create a new project from this template:

```bash
mix create_project.exs MyNewApp
```

This will:

- Clone the template
- Replace all references to the template name
- Remove the `.git` history
- Remove the default GitLab pipeline file

---

### 2. Install Dependencies

```bash
mix setup
```

This alias will:

- Fetch Elixir dependencies
- Create and migrate the database
- Install frontend dependencies (`yarn install` in `assets/`)
- Run the TypeScript compiler

---

### 3. Run the App

Start the Phoenix server with:

```bash
mix phx.server
```

Then visit [http://localhost:4050](http://localhost:4050).

---

## 🛠 Development Notes

### Mix Aliases

- `mix setup` → install deps, set up DB, install frontend deps, run TypeScript
- `mix ecto.setup` → create + migrate DB, run seeds
- `mix ecto.reset` → drop + recreate DB
- `mix test` → prepare DB and run tests
- `mix assets.install` → install frontend deps
- `mix assets.tsc` → run TypeScript compiler
- `mix setup.pipeline` → full setup for CI/CD pipelines
- `mix assets.deploy` → build frontend with Vite + run `phx.digest`
- `mix assets.test` → run frontend tests
- `mix shadcn` → run `npx shadcn@latest` inside `assets/`

---

## 📖 Documentation

- [Elixir](https://elixir-lang.org/)
- [Phoenix Framework](https://www.phoenixframework.org/)
- [Phoenix LiveView](https://hexdocs.pm/phoenix_live_view)
- [Absinthe (GraphQL)](https://hexdocs.pm/absinthe)
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [shadcn/ui](https://ui.shadcn.com/)

---

## 📝 License

This project template is provided under the MIT License. Feel free to use,
modify, and distribute it for your own projects.