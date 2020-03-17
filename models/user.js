
const con = require('../config/config')
const send = require('./signUpControl')


const bcrypt = require('bcryptjs')

const create = {
    create: function(username, email, password) {
        con.query("SELECT COUNT(*) AS cnt FROM user WHERE email = ? AND username = ?" , 
        [email, username] , function(err , data){
   if(err){
       console.log(err);
   }   
   else{
       if(data[0].cnt > 0){  
            return
       }else{
        password = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
        // bcrypt.compareSync(password)
        con.query('INSERT INTO user (username, email, password) VALUES (?, ?, ?)', 
        [username, email, password], (err, data) => {
            if (err) {
                throw err
            }
            con.query('SELECT * FROM user WHERE username = ?',[username],(err, result) => {
                if (err) {
                    throw err
                }
                send.send(result[0].id, result[0].email)
            })
        })               
       }
   }
})
    }
}

module.exports = create