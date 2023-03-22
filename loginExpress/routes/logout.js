const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.log(err);
            res.redirect('/');
        } else {
            res.clearCookie('connect.sid');
            res.redirect('/connexion');
        }
    });
});

module.exports = router;