Set-Location 'd:\KJP\ME'
if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
  Write-Error 'npm is not available on PATH.'
  exit 1
}

npm install
npm run build
npm run deploy
