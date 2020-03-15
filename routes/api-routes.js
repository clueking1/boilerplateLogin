const passport = require('../config/passport')
const db = require('../models')

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
      
        User.create({
          username: req.body.username,
          password: req.body.password,
          email: req.body.email
        }).then(user => res.json(user));
      });
}