require('dotenv').config()
const sendGrid = require('sendgrid').mail;
//const sg = require('sendgrid')(process.env.SENDGRID_API_KEY)
console.log(process.env.SENDGRID_API_KEY)

function sendEmail (to, token) {
  //const hostUrl = process.env.hostURL
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey('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');
const msg = {
  to: to,
  from: 'test@example.com',
  subject: 'Account Confirmation',
  text: `Click on this link to verify your email /verification?token=${token}&email=${to}`,
  html: `<strong>Click on this link to verify your email /verification?token=${token}&email=${to}</strong>`
};
//console.log(hostUrl)
console.log(msg)
sgMail.send(msg);
    
  };

  module.exports = sendEmail