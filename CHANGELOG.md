# Changelog

Toutes les evolutions notables de ce projet seront documentees dans ce fichier.

Le format s'inspire de [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/) et respecte [Semantic Versioning](https://semver.org/lang/fr/).

## [1.0.0] - 2026-04-20

### Added
- Mise en place de l'architecture mini service mesh: `gateway`, `service-a`, `service-b`.
- Routage round-robin avec retry/timeout au niveau gateway.
- Environnement Docker Compose pour execution locale.
- Pipeline CI GitHub Actions (lint, tests, smoke Docker).
- Tests automatises Jest/Supertest pour les 3 applications.
- Collection Postman pour les principaux endpoints.
- Documentation: architecture, choix techniques, guide utilisateur, presentation, maintenance/rollback.

### Fixed
- Stabilisation CI Linux avec nettoyage des `node_modules` vendores et verification des droits d'execution `eslint`.
