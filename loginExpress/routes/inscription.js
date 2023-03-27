var express = require('express');
var router = express.Router();
var db = require('../database');
const bcrypt = require('bcrypt');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('inscription', { title: 'Inscription' });
});

router.post('/add_users', function (req, res, next) {
    var prenom = req.body.prenom;
    var nom = req.body.nom;
    var email = req.body.mail;
    var password = req.body.password;

    var passwordHash = bcrypt.hashSync(password, 10)
    db.query(`INSERT INTO users (email, password, prenom, nom) VALUES ("${email}","${passwordHash}","${prenom}", "${nom}" )`,
        function (err, result) {
            if (err) throw err;
            req.session.loggedIn = true;
            req.session.email = email;
            req.session.nom = nom;
            req.session.prenom = prenom;
        }
    );

    res.redirect("/");


})
    ;
module.exports = router;