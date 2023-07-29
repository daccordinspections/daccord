const router = require("express").Router();
const transporter = require("../utils/transport");

module.exports = (app) => {
  router.post("/", async (req, res) => {
    const msg = req.body;
    const EMAIL_USER = process.env.EMAIL_USER;

    const subject = `Web Enquiry: ${msg.subject}`;
    const text = `Message:\n${msg.message}\nsent by: ${msg.name}, ${msg.email}`;
    const html = `<p><strong>Message</strong>:<br/>${msg.message}<br/><strong>Sent by</strong>: ${msg.name}, ${msg.email}</p>`;

    const mailOptions = {
      from: EMAIL_USER,
      to: EMAIL_USER,
      subject,
      text,
      html,
    };

    try {
      // Use async/await for the sendMail function
      const info = await transporter.sendMail({
        ...mailOptions,
        // Add a timeout configuration (e.g., 10 seconds)
        // The value is in milliseconds
        // Adjust the timeout value based on your needs
        connectionTimeout: 10000,
      });

      console.log("Email sent... ", info);
      res.sendStatus(200);
    } catch (e) {
      console.log("Error sending email: ", e);
      res.sendStatus(500);
    }
  });

  app.use("/contact", router);
};
