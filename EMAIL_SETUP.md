# Contact Form Email Setup Instructions

## Prerequisites
Your contact form is now configured to send real emails using Nodemailer with Gmail. Follow these steps to set it up:

## 1. Gmail Setup

### Step 1: Enable 2-Factor Authentication
1. Go to your [Google Account](https://myaccount.google.com/)
2. Navigate to **Security** > **2-Step Verification**
3. Enable 2-Step Verification if not already enabled

### Step 2: Generate App Password
1. In your Google Account, go to **Security** > **2-Step Verification**
2. Scroll down and click **App passwords**
3. Select **Mail** and **Other (Custom name)**
4. Enter "Portfolio Contact Form" as the custom name
5. Click **Generate**
6. Copy the 16-character app password (it will look like: `abcd efgh ijkl mnop`)

## 2. Environment Configuration

### Update `.env.local` file:
```env
# Replace with your actual Gmail address
EMAIL_USER=your-email@gmail.com

# Replace with the app password you generated (no spaces)
EMAIL_PASS=abcdefghijklmnop
```

### Example:
```env
EMAIL_USER=mynul.sakil@gmail.com
EMAIL_PASS=abcdefghijklmnop
```

## 3. Features

### What happens when someone submits the contact form:

1. **You receive a notification email** with:
   - Sender's name, email, and subject
   - Full message content
   - Reply-to set to sender's email for easy response

2. **Sender receives an auto-reply** with:
   - Thank you message
   - Information about response time (24-48 hours)
   - Your contact details
   - Links to your social media profiles

### Email Templates Include:
- Professional HTML formatting
- Responsive design
- Your branding colors
- Call-to-action links

## 4. Security Features

- Email validation (server-side)
- Rate limiting (built into Next.js API routes)
- Input sanitization
- Environment variable protection

## 5. Alternative Email Services

If you prefer not to use Gmail, you can modify the transporter configuration in `/app/api/contact/route.ts`:

### Outlook/Hotmail:
```javascript
const transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

### Custom SMTP:
```javascript
const transporter = nodemailer.createTransport({
  host: 'smtp.your-provider.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

## 6. Testing

1. Start your development server: `npm run dev`
2. Navigate to the contact section of your portfolio
3. Fill out and submit the form
4. Check your email for the notification
5. Check the sender's email for the auto-reply

## 7. Troubleshooting

### Common Issues:

1. **"Invalid login" error**: Make sure you're using an app password, not your regular Gmail password
2. **"Less secure app access" error**: Use app passwords instead of enabling less secure app access
3. **Email not received**: Check spam/junk folders
4. **Environment variables not loaded**: Restart your development server after updating `.env.local`

### Error Messages:
- The form will show success/error messages to users
- Server errors are logged to the console
- Failed emails don't crash the application

## 8. Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add your environment variables to your hosting platform's environment settings
2. Make sure `.env.local` is in your `.gitignore` file (it should be by default)
3. Test the contact form after deployment

## 9. Rate Limiting (Optional)

For production, consider adding rate limiting to prevent spam:

```javascript
// You can add this to your API route
const rateLimit = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5 // limit each IP to 5 requests per windowMs
};
```

Your contact form is now fully functional with professional email capabilities! 🎉