# Portfolio Contact Form Setup

This project includes a working contact form that sends emails using Nodemailer with Gmail app passwords.

## Setup Instructions

### 1. Gmail App Password Setup

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account settings
   - Security  2-Step Verification  App passwords
   - Generate a new app password for "Mail"
   - Copy the 16-character password

### 2. Environment Configuration

1. **Copy the environment template**:
   ```bash
   cp .env.example .env
   ```

2. **Update `.env` file** with your credentials:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_APP_PASSWORD=your-16-character-app-password
   PORT=3001
   ```

### 3. Running the Application

#### Option 1: Run Both Frontend and Backend Together
```bash
npm run dev:full
```

#### Option 2: Run Separately
Terminal 1 (Frontend):
```bash
npm run dev
```

Terminal 2 (Backend):
```bash
npm run server
```

### 4. Testing the Form

1. Open `http://localhost:5174` (frontend)
2. Navigate to the Contact section
3. Fill out the form and submit
4. Check your email for the message

## Features

-  **Form Validation**: Client-side validation for required fields
-  **Email Validation**: Proper email format checking
-  **Loading States**: Visual feedback during form submission
-  **Success/Error Messages**: Clear user feedback
-  **Responsive Design**: Works on all device sizes
-  **Professional Email Template**: HTML-formatted emails
-  **Security**: Uses app passwords instead of regular passwords

## API Endpoints

- `POST /api/send-email` - Send contact form email
- `GET /api/health` - Server health check

## Troubleshooting

### Common Issues:

1. **"Network error"**: Make sure the backend server is running on port 3001
2. **"Authentication failed"**: Check your app password in `.env`
3. **"All fields required"**: Ensure all form fields are filled
4. **Email not received**: Check spam folder, verify app password setup

### Gmail App Password Issues:

- Make sure 2FA is enabled
- Use the 16-character app password, not your regular password
- App password should be for "Mail" application
- If still having issues, try generating a new app password

## Security Notes

- Never commit `.env` file to version control
- Use app passwords instead of regular passwords
- The server validates all input data
- CORS is configured for localhost development
