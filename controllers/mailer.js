const nodemailer = require("nodemailer");

async function sendMail(senderEmail, mailSubject, text) {
  var details = {
    // from: senderEmail, // sender address
    from: "philixbob@gmail.com", // sender address
    to: "aapcaims@gmail.com", // list of receivers
    subject: mailSubject, // Subject line
    // text: text,
    text: "Testing Hello World",
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
    }
  });
}

module.exports = { sendMail };
