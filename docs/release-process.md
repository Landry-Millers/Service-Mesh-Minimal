## Processus de release

### 1) Preconditions
- Branche `main` a jour
- CI verte
- Changelog mis a jour

### 2) Verification locale
```powershell
npm run ci
```

### 3) Tag de release
```powershell
.\scripts\release.ps1 -Version v1.0.0
git push origin main --follow-tags
```

### 4) Publication GitHub Release (recommande)
- Ouvrir GitHub > Releases > Draft a new release
- Selectionner le tag `v1.0.0`
- Copier le contenu de `CHANGELOG.md` pour la section correspondante

### 5) Rollback
- Revenir au tag precedent:
```powershell
git checkout <tag-precedent>
```
- Redeployer localement:
```powershell
.\scripts\deploy-local.sh
```
