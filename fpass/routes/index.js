var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Contact', mess: '' });
});

router.post('/envoi_email', function (req, res) {
  console.log(req.body);
  const output = 'Vous avez demander à reinitialiser votre mot de passe , veuillez le faire à partir de ce lien http://localhost:3000/';


  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'yadira.emmerich87@ethereal.email',
      pass: 'TK7XypY6YeqTYae9xn'
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // send mail with defined transport object
  let mailOptions = {
    from: '"Afpa Contact" <yadira.emmerich87@ethereal.email>', // sender address
    to: "yadira.emmerich87@ethereal.email", // list of receivers
    subject: "Node email test", // Subject line
    text: "Hello world?", // plain text body
    html: output // html body
  }
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.render('index', { title: 'Contact', mess: 'Email bien envoye' });

  });
})

module.exports = router;
