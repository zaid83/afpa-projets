var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const loggedIn = req.session.loggedIn || false;
  const email = req.session.email || '';
  const nom = req.session.nom || '';
  const prenom = req.session.prenom || '';
  var title = 'Bienvenue';
  res.render('index', { loggedIn, email, title, nom, prenom, mess: '' });

});

module.exports = router;
