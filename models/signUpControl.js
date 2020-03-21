const crypto = require('crypto-random-string');
const sendEmail = require('../email/sendGrid');
const con = require('../config/config')



const send = {
    send: function(userId, userEmail) {
        //console.log(userId)
        con.query('INSERT INTO auth (userId, token) VALUES (?, ?)',[userId, crypto({length: 10})], async (err, result) => {
            
            if(err) {
                throw err
            }
            con.query('SELECT * FROM auth WHERE userId = ?',[userId], (err, data) => {
                if (err) {
                    throw err
                }
                //console.log(data[0].token)
                 sendEmail(userEmail, data[0].token)
            })
            // console.log(result)
            // sendEmail(userEmail, result.token)
            
            // .then(res => {res.status(200).json(`${user.email} account created successfully`)})
            // .catch((error) => {
            //     return res.status(500).json(error);
            //   });
        })
    }
}



module.exports = send