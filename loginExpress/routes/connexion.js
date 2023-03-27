var express = require('express');
var router = express.Router();
var db = require('../database');
const bcrypt = require('bcrypt');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('connexion', { title: 'Connexion', message: '' });
});

router.post('/connect_user', (req, res) => {

    var email = req.body.mail;
    var password = req.body.password;


    // Vérification si l'utilisateur existe
    db.query('SELECT * FROM users WHERE email = ?', [email], (error, results) => {
        if (results.length === 0) {
            res.render('connexion', { title: 'Connexion', message: 'Aucun utilisateur avec cette adresse mail' });
        } else {
            // Vérification du mot de passe
            const match = bcrypt.compare(password, results[0].password,
                (err, result) => {
                    if (err) throw err;

                    if (result) {
                        req.session.loggedIn = true;
                        req.session.email = email;
                        req.session.nom = results[0].nom;
                        req.session.prenom = results[0].prenom;


                        res.redirect('/');
                    } else {
                        res.render('connexion', { message: 'Mot de passe incorrect' });
                    }
                });
        }
    });
});

module.exports = router;