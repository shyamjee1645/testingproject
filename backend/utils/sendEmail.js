
require("dotenv").config({ path: "backend/config/config.env" });
console.log(process.env.SMTP_MAIL);
async function getEmailClient() {
  const { SMTPClient } = await import('emailjs'); // Using dynamic import for ES Modules

  const client = new SMTPClient({
      user: process.env.SMTP_MAIL, // Your SMTP username (often your email address)
      password: process.env.SMTP_PASSWORD, // Your SMTP password
      host: process.env.SMTP_HOST, // SMTP server host (e.g., smtp.gmail.com)
      ssl: true, // Use SSL/TLS
  });
  // Function to send an email
  const sendEmail = (options) => {
      return new Promise((resolve, reject) => {
          client.send(
              {
                  text: options.message,
                  from: options.from,
                  to: options.to,
                  cc: options.cc,
                  subject: options.subject,
              },
              (err, message) => {
                  if (err) {
                      console.error('Email sending error:', err);
                      reject(err);
                  } else {
                      console.log('Email sent:', message);
                      resolve(message);
                  }
              }
          );
      });
  };

  return sendEmail; // Return the function to send emails
}

module.exports = getEmailClient;