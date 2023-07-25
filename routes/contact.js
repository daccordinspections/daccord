const router = require("express").Router();
const transporter = require("../utils/transport");

module.exports = (app) => {
    router.post("/", async (req, res) => {

        const msg = req.body;

            const EMAIL_USER = proccess.env.EMAIL_USER;

            const whatAbout = `Web Enquiry: ${msg.subject}`;
            const message = `Message:\n${msg.message}\nsent by: ${msg.name}, ${msg.email}`;
            const htmlMessage = `<p><strong>Message</strong>:<br/>${msg.message}<br/><strong>Sent by</strong>: ${msg.name}, ${msg.email}</p>`;

            const mailOptions = {
                from: EMAIL_USER,
                to: EMAIL_USER,
                subject: whatAbout,
                text: message,
                html: htmlMessage
            }

            
            try {
                
                await transporter.sendMail(mailOptions, function (err, info) {

                    if (err) {
                        console.log("error: ", err);
                        console.log("message: \n", req.body);
                        res.sendStatus(500);
                    } else {
                        console.log("Email sent... ", info);
                        res.sendStatus(200);
                    }

                });

            } catch(e) {
                console.log("error: ", e.message);
                console.log("message: \n", req.body);
                res.sendStatus(500);
            }

        }
    );


    app.use("/contact", router);

}
