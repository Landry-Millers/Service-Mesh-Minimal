#!/usr/bin/env bash
set -euo pipefail

echo "Rolling back local stack (stop and clean)..."
docker compose down -v
echo "Rollback complete."
