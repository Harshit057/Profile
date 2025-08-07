Write-Host "Starting Portfolio Application..." -ForegroundColor Green
Write-Host ""

# Check if MongoDB is running
Write-Host "Checking if MongoDB is running..." -ForegroundColor Yellow
$mongoRunning = Get-NetTCPConnection -LocalPort 27017 -ErrorAction SilentlyContinue
if (-not $mongoRunning) {
    Write-Host "WARNING: MongoDB doesn't appear to be running on port 27017" -ForegroundColor Yellow
    Write-Host "Please start MongoDB first, or the backend will use fallback data" -ForegroundColor Yellow
    Write-Host ""
}

# Start Backend
Write-Host "Starting Backend Server..." -ForegroundColor Cyan
Set-Location "portfolio-backend"
Start-Process powershell -ArgumentList "-NoExit", "-Command", "npm run dev" -WindowStyle Normal

# Wait a moment for backend to start
Write-Host "Waiting for backend to start..." -ForegroundColor Yellow
Start-Sleep -Seconds 3

# Start Frontend
Write-Host "Starting Frontend Server..." -ForegroundColor Cyan
Set-Location "..\portfolio-frontend"
Start-Process powershell -ArgumentList "-NoExit", "-Command", "npm run dev" -WindowStyle Normal

Write-Host ""
Write-Host "Portfolio application is starting..." -ForegroundColor Green
Write-Host "Backend: http://localhost:5000" -ForegroundColor White
Write-Host "Frontend: http://localhost:5173" -ForegroundColor White
Write-Host ""
Write-Host "Press any key to exit this window..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown") 