# Email Setup Guide

This guide will help you set up email functionality for the contact form using Gmail SMTP.

## Prerequisites

1. A Gmail account
2. 2-Factor Authentication enabled on your Gmail account
3. An App Password generated for this application

## Step-by-Step Setup

### 1. Enable 2-Factor Authentication
- Go to your Google Account settings
- Navigate to Security
- Enable 2-Step Verification if not already enabled

### 2. Generate an App Password
- Go to your Google Account settings
- Navigate to Security → 2-Step Verification
- Scroll down to "App passwords"
- Click "Generate" and select "Mail" as the app
- Copy the generated 16-character password

### 3. Configure Environment Variables
Create a `.env` file in the `portfolio-backend` directory with the following variables:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development

# Email Configuration (Gmail SMTP)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-16-character-app-password
TO_EMAIL=harshitsharmasncp1.212@gmail.com
```

### 4. Replace the placeholder values:
- `your-gmail@gmail.com`: Your Gmail address
- `your-16-character-app-password`: The app password you generated in step 2
- `harshitsharmasncp1.212@gmail.com`: The email where you want to receive contact form messages (this is already set to your email)

### 5. Test the Setup
1. Start the backend server: `npm run dev`
2. Go to your portfolio website
3. Fill out the contact form
4. Check your email for the message

## Troubleshooting

### Common Issues:

1. **"Invalid login" error**
   - Make sure you're using an App Password, not your regular Gmail password
   - Ensure 2-Factor Authentication is enabled

2. **"Less secure app access" error**
   - This is expected and normal - the app password bypasses this

3. **Email not sending**
   - Check the console logs for detailed error messages
   - Verify all environment variables are set correctly
   - Ensure the backend server is running

### Security Notes:
- Never commit your `.env` file to version control
- The app password is specific to this application
- You can revoke app passwords at any time from your Google Account settings

## Alternative Email Services

If you prefer not to use Gmail, you can configure other email services:

### Outlook/Hotmail:
```env
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
```

### Yahoo:
```env
EMAIL_HOST=smtp.mail.yahoo.com
EMAIL_PORT=587
```

### Custom SMTP Server:
```env
EMAIL_HOST=your-smtp-server.com
EMAIL_PORT=587
EMAIL_USER=your-email@domain.com
EMAIL_PASS=your-password
``` 