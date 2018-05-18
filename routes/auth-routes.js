const express = require('express');
const router = express.Router();
const passport = require('passport');
//auth login
router.get('/login', (req, res) => {
   res.render('login');
});

// auth logout
router.get('/logout', (req, res) => {
   //handle with passport
   res.send('loggig out');
});

// auth with google
router.get(
   '/google',
   passport.authenticate('google', {
      scope: ['profile']
   })
);
//callback route for google to redirec to
router.get('/google/redirect', (req, res) => {
   res.send('you redirected to callback uri');
});
module.exports = router;
