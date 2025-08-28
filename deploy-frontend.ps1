#!/usr/bin/env powershell

# Build and deploy frontend to Vercel
Write-Host "Building frontend..." -ForegroundColor Green

# Navigate to frontend directory
Set-Location "portfolio-frontend"

# Install dependencies if needed
if (-not (Test-Path "node_modules")) {
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    npm install
}

# Build the project
Write-Host "Building project..." -ForegroundColor Green
npm run build

# Deploy to Vercel (requires Vercel CLI)
Write-Host "Deploying to Vercel..." -ForegroundColor Green
if (Get-Command vercel -ErrorAction SilentlyContinue) {
    vercel --prod
} else {
    Write-Host "Vercel CLI not found. Please install it with: npm i -g vercel" -ForegroundColor Red
    Write-Host "Or manually deploy by uploading the dist/ folder to Vercel" -ForegroundColor Yellow
}

# Return to root directory
Set-Location ".."

Write-Host "Deployment complete!" -ForegroundColor Green
