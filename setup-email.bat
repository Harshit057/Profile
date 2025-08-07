@echo off
echo ========================================
echo Portfolio Email Setup Helper
echo ========================================
echo.

echo This script will help you set up email functionality for your portfolio.
echo.

echo Step 1: Gmail Setup
echo - Enable 2-Factor Authentication on your Gmail account
echo - Generate an App Password (Google Account > Security > 2-Step Verification > App passwords)
echo - Copy the 16-character app password
echo.

echo Step 2: Create .env file
echo Creating .env file in portfolio-backend directory...
echo.

cd portfolio-backend

if not exist .env (
    echo Creating .env file...
    copy env.example .env
    echo .env file created successfully!
    echo.
    echo Please edit the .env file and add your Gmail credentials:
    echo - EMAIL_USER=your-gmail@gmail.com
    echo - EMAIL_PASS=your-16-character-app-password
    echo.
    echo The TO_EMAIL is already set to your email address.
    echo.
) else (
    echo .env file already exists.
    echo Please make sure it contains your email configuration.
    echo.
)

echo Step 3: Test the email setup
echo.
echo To test your email configuration, run:
echo npm run test-email
echo.
echo To start the backend server, run:
echo npm run dev
echo.
echo For detailed setup instructions, see EMAIL_SETUP.md
echo.

pause 