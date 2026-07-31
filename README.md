# IDP Platform

An Internal Developer Platform (IDP) built with NestJS. The goal is to give engineers a single, consistent place to manage services, provision infrastructure, and follow golden-path conventions instead of piecing tools together manually.

This project is in early development. The base application is running with foundational building blocks in place, and platform-specific features are being built out incrementally.

## What is this?

An Internal Developer Platform reduces the operational overhead engineers deal with day to day — things like standing up a new service, tracking who owns what, checking service health, or provisioning cloud resources. Instead of every team solving these problems separately, the platform provides shared, self-service tooling.

This repo is the core API for that platform.

## Current status

**Working:**
- NestJS application scaffold, running in watch mode for local development
- Environment-based configuration via `@nestjs/config`
- Health check endpoint (`GET /health`) via `@nestjs/terminus`

**Not yet built:**
- Database integration
- Authentication
- CI/CD pipeline
- Core platform features (service catalog, scaffolding templates, or infrastructure orchestration — direction still being finalized)

## Tech stack

- [NestJS](https://nestjs.com/) — application framework
- TypeScript
- `@nestjs/config` — environment configuration
- `@nestjs/terminus` — health checks

## Getting started

### Prerequisites

- Node.js (v18 or later recommended)
- npm

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
```

### Running the app

```bash
# development (watch mode)
npm run start:dev

# production
npm run start:prod
```

The app runs on `http://localhost:3000` by default (or whatever `PORT` is set to).

### Health check

Once running, verify the app is healthy:

```
GET http://localhost:3000/health
```

Expected response:

```json
{ "status": "ok", "info": {}, "error": {}, "details": {} }
```

## Roadmap

The platform's direction is still being scoped, with the following areas under consideration:

1. **Service catalog** — track services, ownership, and metadata across the org
2. **Scaffolding engine** — generate new projects from standardized templates
3. **Infrastructure orchestration** — provision cloud resources through the platform instead of directly through cloud consoles

## Contributing

This project is under active early-stage development. Contribution guidelines will be added as the platform's direction solidifies.

## License

Not yet decided.
