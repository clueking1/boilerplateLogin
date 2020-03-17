require('dotenv').config()
const sendGrid = require('sendgrid').mail;
//const sg = require('sendgrid')(process.env.SENDGRID_API_KEY)
console.log(process.env.SENDGRID_API_KEY)

function sendEmail (to, token) {

    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey('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');
const msg = {
  to: to,
  from: 'test@example.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);
    
  };

  module.exports = sendEmail