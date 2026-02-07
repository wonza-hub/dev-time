# Auto-commit with .commit_message.txt (PowerShell)

$null = & git rev-parse --is-inside-work-tree 2>$null
if ($LASTEXITCODE -ne 0) { exit 0 }

$changes = & git status --porcelain
if ([string]::IsNullOrWhiteSpace($changes)) { exit 0 }

$top = (& git rev-parse --show-toplevel).Trim()
$msgFile = Join-Path $top '.commit_message.txt'
if (!(Test-Path -LiteralPath $msgFile) -or (Get-Item -LiteralPath $msgFile).Length -eq 0) { exit 0 }
if ([string]::IsNullOrEmpty((Get-Content -LiteralPath $msgFile -Raw))) { exit 0 }

& git add -A
& git commit -F $msgFile --quiet
