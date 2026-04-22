#!/usr/bin/env bash
set -euo pipefail

echo "Deploying local stack..."
docker compose up -d --build
echo "Deployment complete. Gateway: http://localhost:8080"
