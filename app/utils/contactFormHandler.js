"use server"
import { sendMail } from './sendMail'

export async function sendContactForm({ name, email, subject, message }) {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Email from User</title>
      <style>
        /* Converted Tailwind CSS classes to standard CSS */
        body { margin: 0; font-family: Arial, sans-serif; }
        .bg-gray-800 { background-color: #2d3748; }
        .p-6 { padding: 1.5rem; }
        .rounded-lg { border-radius: 0.5rem; }
        .shadow-md { box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
        .max-w-lg { max-width: 32rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .my-8 { margin-top: 2rem; margin-bottom: 2rem; }
        .text-white { color: #ffffff; }
        .text-2xl { font-size: 1.5rem; }
        .font-semibold { font-weight: 600; }
        .mb-4 { margin-bottom: 1rem; }
        .text-indigo-400 { color: #7f9cf5; }
        .mb-2 { margin-bottom: 0.5rem; }
        .font-bold { font-weight: 700; }
        .bg-gray-700 { background-color: #4a5568; }
        .bg-gray-900 { background-color: #111827; }
        .p-4 { padding: 1rem; }
        .shadow-inner { box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06); }
        .border { border-width: 1px; }
        .border-gray-600 { border-color: #718096; }
        .mt-4 { margin-top: 1rem; }
        .text-sm { font-size: 0.875rem; }
        .text-gray-400 { color: #cbd5e0; }
      </style>
    </head>
    <body class="bg-gray-900">
      <div class="bg-gray-800 p-6 rounded-lg shadow-md max-w-lg mx-auto my-8 text-white">
        <h2 class="text-2xl font-semibold mb-4 text-indigo-400">New Contact Form Submission</h2>
        <p class="mb-2"><span class="font-bold">Name:</span> ${name}</p>
        <p class="mb-2"><span class="font-bold">Email:</span> ${email}</p>
        <p class="mb-2"><span class="font-bold">Message:</span></p>
        <p class="bg-gray-700 p-4 rounded-lg shadow-inner border border-gray-600">${message}</p>
        <p class="mt-4 text-sm text-gray-400">Please respond to the user as soon as possible. <strong>Team LEVIZR!</strong> From Levizr Hosting</p>
      </div>
    </body>
    </html>
  `;

  try {
    await sendMail(email, process.env.SERVER_EMAIL, subject, html)
    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error: 'An error occurred while sending the email. Please try again.' }
  }
}
