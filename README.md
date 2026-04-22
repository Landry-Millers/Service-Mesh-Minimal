# Service Mesh Minimal

Mini-projet demonstratif d'un maillage de services simplifie avec:
- un **gateway** (routage + retry + timeout),
- deux microservices (`service-a`, `service-b`),
- un environnement **Docker Compose**,
- des **tests automatises**,
- un pipeline **CI/CD** minimal.

## 1) Installation

### Prerequis
- Node.js 20+
- Docker Desktop (ou Docker Engine + Compose)

### Bootstrap
```bash
npm run bootstrap
```

## 2) Configuration

Variables principales (configurees dans `docker-compose.yml`):
- `PORT` (gateway)
- `SERVICE_A_URL`
- `SERVICE_B_URL`
- `RETRY_COUNT`
- `REQUEST_TIMEOUT_MS`

## 3) Lancement

### Stack complete (Docker)
```bash
docker compose up --build
```

### Endpoints
- Gateway health: `http://localhost:8080/health`
- Mesh route: `http://localhost:8080/api/hello`
- Service A direct: `http://localhost:3001/hello`
- Service B direct: `http://localhost:3002/hello`

## 4) Tests automatises

```bash
npm run ci
```

Ce script lance:
- lint sur les 3 applications,
- tests Jest/Supertest sur les 3 applications.

## 5) Collection Postman

Importer:
- `postman/Service-Mesh-Minimal.postman_collection.json`

Variable incluse:
- `baseUrl = http://localhost:8080`

## 6) CI/CD

Workflow:
- `.github/workflows/ci.yml`

Etapes:
1. Install dependencies
2. Lint + tests
3. Build Docker
4. Smoke test sur `GET /health`

## 7) Scripts utiles

- `scripts/bootstrap.sh`: installation dependencies
- `scripts/test.sh`: lint + tests
- `scripts/deploy-local.sh`: deploiement local docker
- `scripts/rollback-local.sh`: rollback local (down -v)

## 8) Documentation

- Architecture: `docs/architecture.mmd`
- Choix techniques: `docs/technical-choices.md`
- Guide utilisateur: `docs/user-guide.md`
- Maintenance/rollback: `docs/maintenance-and-rollback.md`
- Support presentation: `docs/presentation.md`

## 9) Structure

```text
.
|-- gateway/
|-- services/
|   |-- service-a/
|   `-- service-b/
|-- scripts/
|-- postman/
|-- docs/
|-- docker-compose.yml
`-- .github/workflows/ci.yml
```
