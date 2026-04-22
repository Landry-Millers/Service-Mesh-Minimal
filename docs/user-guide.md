## Guide utilisateur

### Prerequis
- Node.js 20+
- Docker + Docker Compose

### Installation rapide
1. `npm run bootstrap`
2. `docker compose up --build`

### Utilisation
- Health gateway: `GET http://localhost:8080/health`
- Route mesh: `GET http://localhost:8080/api/hello`
- Service A direct: `GET http://localhost:3001/hello`
- Service B direct: `GET http://localhost:3002/hello`

### Test via Postman
1. Importer `postman/Service-Mesh-Minimal.postman_collection.json`
2. Exécuter les requêtes dans l'ordre.
