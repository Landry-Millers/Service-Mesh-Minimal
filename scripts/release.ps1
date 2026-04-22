param(
  [Parameter(Mandatory = $true)]
  [string]$Version
)

$ErrorActionPreference = "Stop"

if ($Version -notmatch '^v\d+\.\d+\.\d+$') {
  throw "Version invalide. Utilise le format vMAJOR.MINOR.PATCH (ex: v1.0.0)."
}

Write-Host "Running quality checks..."
npm run ci

Write-Host "Creating annotated tag $Version..."
git tag -a $Version -m "Release $Version"

Write-Host "Done. Push with:"
Write-Host "  git push origin main --follow-tags"
