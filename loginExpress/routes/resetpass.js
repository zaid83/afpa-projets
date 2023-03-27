var express = require('express');
var router = express.Router();
var db = require('../database.js');
var nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken')



router.get('/:id/:token', function (req, res, next) {
    const id = req.params.id;
    const token = req.params.token;
    db.query('SELECT * FROM users WHERE id_user = ?', [id], (error, results) => {
        if (results.length === 0) {
            res.send("L'ID est invalide");
        } else {
            var JWT_SECRET = 'jdkljfsdds';
            var userPass = results[0].password;
            var secret = JWT_SECRET + userPass;

            res.render('resetpass', { title: 'Nouveau mot de passe' });

        }
    });
});

router.post('/:id/:token', function (req, res, next) {
    const pass = req.body.password;
    const id = req.params.id;
    var passwordHash = bcrypt.hashSync(pass, 10)


    db.query(`UPDATE users SET
     password = "${passwordHash}"
      WHERE id_user = "${id}" `,
        function (err, result) {
            if (err) throw err;
            res.redirect("/");
        }
    );

})


module.exports = router;