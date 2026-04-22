#!/usr/bin/env bash
set -euo pipefail

echo "Running lint + tests..."
npm run ci
echo "All checks passed."
