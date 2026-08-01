# IDP Platform

An Internal Developer Platform (IDP) built with NestJS. The goal is to give engineers a single, consistent place to manage services, provision infrastructure, and follow golden-path conventions instead of piecing tools together manually.

This is the backend API. The frontend that consumes it lives in a separate repo: [idp-portal](https://github.com/Prosper41/idp-portal).

## What is this?

An Internal Developer Platform reduces the operational overhead engineers deal with day to day things like standing up a new service, tracking who owns what, checking service health, or provisioning cloud resources. Instead of every team solving these problems separately, the platform provides shared, self-service tooling.

This repo is the core API for that platform. The chosen starting point is a **service catalog** a central place to register services and their metadata, which the platform's other features (scaffolding, infrastructure orchestration) will eventually build on top of.

## Current status

**Working:**
- NestJS application, containerized with Docker
- PostgreSQL database, connected via Docker Compose
- Prisma ORM, with a `Service` model and applied migrations
- Full CRUD on `/services` — create, list, get one, update, delete
- Query filtering on `/services` by team, tag, language, and status
- Input validation via DTOs and a global `ValidationPipe`
- Health check endpoint (`GET /health`), reporting live database connectivity via `@nestjs/terminus`
- Interactive API docs via Swagger, live at `/api`
- CI pipeline on GitHub Actions — lint, test, build, and Docker image build on every push

**Not yet built:**
- Authentication (the API is currently open)
- A CLI
- The platform's next phase: scaffolding engine or infrastructure orchestration

## Tech stack

- [NestJS](https://nestjs.com/) — application framework
- TypeScript
- PostgreSQL
- [Prisma](https://www.prisma.io/) — ORM
- Docker & Docker Compose
- `@nestjs/config` — environment configuration
- `@nestjs/terminus` — health checks
- `@nestjs/swagger` — API documentation
- GitHub Actions — CI

## Getting started

### Prerequisites

- Node.js (v18 or later recommended)
- npm
- Docker & Docker Compose

### Installation

```bash
git clone https://github.com/Prosper41/idp-platform.git
cd idp-platform
npm install
```

### Environment setup

Create a `.env` file in the project root:

```
NODE_ENV=development
PORT=3000

POSTGRES_USER=idp_user
POSTGRES_PASSWORD=idp_password
POSTGRES_DB=idp_platform
POSTGRES_PORT=5432

DATABASE_URL=postgresql://idp_user:idp_password@localhost:5432/idp_platform?schema=public
```

### Running the app

**With Docker (recommended)** — runs the app and PostgreSQL together:

```bash
docker compose up --build
```

**Without Docker** — requires PostgreSQL running separately, with `DATABASE_URL` pointed at it:

```bash
npm run start:dev
```

The app runs on `http://localhost:3000` by default (or whatever `PORT` is set to).

### Database migrations

```bash
npx prisma migrate dev --name <migration_name>
```

### Health check

Once running, verify the app and database are healthy:

```
GET http://localhost:3000/health
```

Expected response:

```json
{ "status": "ok", "info": { "database": { "status": "up" } }, "error": {}, "details": { "database": { "status": "up" } } }
```

### API documentation

Interactive Swagger docs are available at:

```
http://localhost:3000/api
```

### Services API

| Method | Endpoint | Description |
|---|---|---|
| POST | `/services` | Create a service |
| GET | `/services` | List services (supports `?team=`, `?tag=`, `?language=`, `?status=` filters) |
| GET | `/services/:id` | Get a single service |
| PATCH | `/services/:id` | Update a service |
| DELETE | `/services/:id` | Delete a service |

## Related repos

- [idp-portal](https://github.com/Prosper41/idp-portal) — the developer-facing frontend for this platform. Currently built on mock data; connecting it to this API is a near-term goal.

## Roadmap

1. ~~Service catalog~~ — done: CRUD, filtering, metadata, CI
2. Authentication on the API
3. Connect [idp-portal](https://github.com/Prosper41/idp-portal) to this API, replacing its mock data
4. Decide and build the platform's next phase: scaffolding engine or infrastructure orchestration

## Contributing

This project is under active early-stage development. Contribution guidelines will be added as the platform's direction solidifies.

## License

Not yet decided.
