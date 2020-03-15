
const con = require('../config/config')



const create = {
    create: function(username, email, password) {
        password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
        
        con.query('INSERT INTO user (username, email, password) VALUES (?, ?, ?)', 
        [username, email, password], (err, data) => {
            if (err) {
                throw err
            }
            console.log('success!')
        })
    }
}

module.exports = create