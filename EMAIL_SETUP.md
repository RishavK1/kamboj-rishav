# Email Setup Instructions

## Option 1: Using Formspree (Recommended - Free & Easy)

1. Go to [Formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form and get your form endpoint URL
4. Update the contact form to use Formspree

## Option 2: Using EmailJS (Client-side)

1. Go to [EmailJS.com](https://www.emailjs.com)
2. Sign up for a free account
3. Create an email service (Gmail, Outlook, etc.)
4. Get your service ID, template ID, and public key
5. Update the contact form to use EmailJS

## Option 3: Using Nodemailer (Server-side)

1. Install nodemailer: `npm install nodemailer @types/nodemailer`
2. Set up Gmail app password
3. Add environment variables to `.env.local`
4. Update the API route to use nodemailer

## Current Implementation

The contact form is currently set up with a basic API route that logs the form data. To make it actually send emails, you need to integrate one of the above services.

### Quick Formspree Integration

Replace the API call in `contact-form.tsx` with:

```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
  }),
});
```

This will send emails directly to your specified email address.
