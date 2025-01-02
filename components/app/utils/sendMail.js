const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.MAIL_SERVER_PORT,
  secure: process.env.IS_EMAIL_SECURE, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.SERVER_EMAIL,
    pass: process.env.SERVER_EMAIL_PASS,
  },
});

// async..await is not allowed in global scope, must use a wrapper
export async function sendMail(from,to,subject,html) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: from, // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    html: html, // html body
  });

  console.log("Message sent: %s", info);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

sendMail().catch(console.error);
