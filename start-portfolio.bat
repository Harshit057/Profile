@echo off
echo Starting Portfolio Application...
echo.

echo Checking if MongoDB is running...
netstat -an | findstr ":27017" >nul
if %errorlevel% neq 0 (
    echo WARNING: MongoDB doesn't appear to be running on port 27017
    echo Please start MongoDB first, or the backend will use fallback data
    echo.
)

echo Starting Backend Server...
cd portfolio-backend
start "Backend Server" cmd /k "npm run dev"

echo Waiting for backend to start...
timeout /t 3 /nobreak >nul

echo Starting Frontend Server...
cd ..\portfolio-frontend
start "Frontend Server" cmd /k "npm run dev"

echo.
echo Portfolio application is starting...
echo Backend: http://localhost:5000
echo Frontend: http://localhost:5173
echo.
echo Press any key to exit this window...
pause >nul 