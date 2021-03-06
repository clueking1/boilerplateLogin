const passport = require('../config/passport')
const db = require('../models/user')

const { check, validationResult } = require('express-validator');

module.exports = function(app) {
    app.post('/user', [
        check('email').isEmail(),
        check('username').isLength({ min: 5}),
        check('password').isLength({ min: 5 }).custom((value,{req, loc, path}) => {
            if (value !== req.body.passwordCon) {
                // trow error if passwords do not match
                throw new Error("Passwords don't match");
            } else {
                return value;
            }
        })
        //check('passwordCon', 'Password do not match').equals('password')
      ], (req, res) => {
        
        
        const errors = validationResult(req);
        console.log(errors)
        if (!errors.isEmpty()) {
          return res.status(422).json({ errors: errors.array() });
        }
    
        db.create(
           req.body.username,
           req.body.email,
           req.body.password,
          // req.body.passwordCon
        )
        res.redirect('/')
      });

      app.post('/api/login', passport.authenticate('local'), (req, res) => {
        res.json(req.user)
      })

      app.get('/logout', (req, res) => {
        req.logout()
        res.redirect('/')
      })

      app.get('/api/user_data', (req, res) => {
        if (!req.user[0]) {
          res.json({})
        } else {
          res.json({
            username: req.user[0].username,
            id: req.user[0].id
          })
        }
      })
}