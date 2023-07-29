const nodemailer = require("nodemailer");

const mailConfig = {
  service: "Zoho",
  // host: process.env.SMTP_HOST,
  secure: true,
  // port: 465,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  },
};

const transporter = nodemailer.createTransport(mailConfig);

module.exports = transporter;