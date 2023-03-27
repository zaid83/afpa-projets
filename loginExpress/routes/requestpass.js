var express = require('express');
var router = express.Router();
var db = require('../database.js');
var nodemailer = require('nodemailer');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken')

var JWT_SECRET = 'jdkljfsdds';
router.get('/', function (req, res, next) {
    res.render('requestpass', { title: 'Requete de mot de passe' });
});

router.post('/', function (req, res, next) {
    //verifier que le mail existe
    var mail = req.body.mail;
    db.query('SELECT * FROM users WHERE email = ?', [mail], (error, results) => {
        if (results.length === 0) {
            res.send('Aucun utilisateur avec cette adresse mail');
        }
        else {
            var userId = results[0].id_user;
            var userMail = results[0].email;
            var userPass = results[0].password;

            //DEFINIR LE LIEN TOKEN
            var secret = JWT_SECRET + userPass;
            //DEFINIR LE PAYLOAD
            var payload = {
                email: userMail,
                id: userId
            }
            const token = jwt.sign(payload, secret, { expiresIn: '10m' })
            const link = `http://localhost:3000/resetpass/${userId}/${token}`


            const output = `Vous avez demander à reinitialiser votre mot de passe , veuillez le faire à partir de ce lien <a href="${link}">${link}< `;


            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: "smtp.ethereal.email",
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: 'dewitt26@ethereal.email',
                    pass: 'uW25rVrc1Qcu36mVDe'
                },
                tls: {
                    rejectUnauthorized: false
                }
            });

            // send mail with defined transport object
            let mailOptions = {
                from: '"Afpa Contact" <dewitt26@ethereal.email>', // sender address
                to: "dewitt26@ethereal.email", // list of receivers
                subject: "Email test", // Subject line
                text: "Hello world?", // plain text body
                html: output // html body
            }
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                } else {

                    console.log("Message sent: %s", info.messageId);

                    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

                    res.render('connexion', { title: 'Connexion', message: 'Email a bien été envoyé' });
                }


            })
        }
    })
})


module.exports = router;