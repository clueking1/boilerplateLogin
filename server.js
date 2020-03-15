const express = require('express')
const session = require('express-session')
const passport = require('./config/passport')

const PORT = process.env.PORT || 8080

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true}))
//app.use(passport.initialize())
//app.use(passport.session())

//require('./routes/html-routes.js')(app)
require('./routes/api-routes.js')(app)

app.listen(PORT, () => {
    console.log('http://localhost:' + PORT)
})