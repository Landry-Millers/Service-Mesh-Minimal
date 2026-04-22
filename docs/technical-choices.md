## Choix techniques

- **Node.js + Express**: implémentation rapide et lisible pour un POC.
- **Gateway unique**: point d'entrée simulant une logique "mesh data plane" minimale.
- **Round-robin + retry + timeout**: fonctionnalités clés d'un maillage de services.
- **Docker Compose**: orchestration locale simple pour dev/test/demo.
- **Jest + Supertest**: tests d'API rapides et automatiques.
- **GitHub Actions**: pipeline CI/CD minimal (lint, tests, smoke docker).

## Limites volontaires

- Pas de mTLS et pas de sidecar (on reste "minimal").
- Pas de persistance ni de message broker.
- Observabilité basique (health endpoints), sans stack Prometheus/Grafana.
