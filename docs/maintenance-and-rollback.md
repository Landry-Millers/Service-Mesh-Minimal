## Procedures de maintenance

### Verification et diagnostics
- Verifier l'etat: `docker compose ps`
- Logs gateway: `docker compose logs gateway`
- Logs services: `docker compose logs service-a service-b`

### Maintenance standard
1. Lancer les tests avant changement: `./scripts/test.sh`
2. Redeployer localement: `./scripts/deploy-local.sh`
3. Verifier `GET /health` et `GET /api/hello`

## Procedure de rollback

### Rollback local
1. Arreter et nettoyer la stack: `./scripts/rollback-local.sh`
2. Revenir a une version stable du code (tag/commit)
3. Redeployer: `./scripts/deploy-local.sh`

### Rollback CI/CD (principe)
- Garder une image Docker versionnee (`service:1.0.x`)
- Re-pointer la release vers le tag precedent
- Reexecuter le workflow de deploiement
