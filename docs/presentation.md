## Presentation projet - Service Mesh Minimal

### Objectif
Montrer les mecanismes fondamentaux d'un service mesh sur un cas simple:
- Routage inter-services
- Tolerance aux pannes (retry + timeout)
- Deploiement conteneurise
- Qualite via tests automatises

### Architecture
- `gateway`: entree unique, repartition round-robin, retry/timeout
- `service-a`, `service-b`: services applicatifs exposes en HTTP
- `docker-compose.yml`: orchestration locale
- `ci.yml`: pipeline lint + tests + smoke docker

### Demonstration suggeree (5-10 min)
1. Demarrer la stack: `docker compose up --build`
2. Appeler `/api/hello` plusieurs fois et observer l'alternance A/B
3. Simuler une panne (stopper `service-a`) et observer le comportement degrade
4. Lancer les tests et la collection Postman

### Valeur pedagogique
- Base claire pour evoluer vers:
  - circuit breaker
  - tracing distribue
  - mTLS
  - controle de trafic canary
