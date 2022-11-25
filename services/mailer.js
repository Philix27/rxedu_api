const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function sendMail(senderEmail, mailSubject, text) {
  var details = {
    from: senderEmail, // sender address
    to: "aapcaims@gmail.com", // list of receivers
    subject: mailSubject, // Subject line
    text: text, // plain text body
  };

  let transporter = nodemailer.createTransport({
    service: "gmail",
    // host: "smtp.ethereal.email",
    // port: 587,
    // secure: false, // true for 465, false for other ports
    auth: {
      user: "aapcaims@gmail.com",
      pass: "apcaims247",
    },
  });

  let info = await transporter.sendMail(details, (err) => {
    if (err) {
      console.log("An error occured", err);
    } else {
      console.log("successful");
    }
  });

  // console.log("Message sent: %s", info.messageId);
  // // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // // Preview only available when sending through an Ethereal account
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

// main().catch(console.error);
