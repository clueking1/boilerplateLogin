const passport = require('../config/passport')
const db = require('../models/user')
const { check, validationResult } = require('express-validator');

module.exports = function(app) {
    app.post('/user', [
        check('email').isEmail(),
        check('username').isLength({ min: 5}),
        check('password').isLength({ min: 5 })
      ], (req, res) => {
        
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(422).json({ errors: errors.array() });
        }
      
        db.create(
           req.body.username,
           req.body.email,
          req.body.password
        )
        res.redirect('/')
      });
}