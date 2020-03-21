require('dotenv').config()
const sendGrid = require('sendgrid').mail;
//const sg = require('sendgrid')(process.env.SENDGRID_API_KEY)
console.log(process.env.SENDGRID_API_KEY)

function sendEmail (to, token) {
  const hostUrl = process.env.hostURL
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey('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');
const msg = {
  to: to,
  from: 'test@example.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: `Click on this link to verify your email ${hostUrl}/verification?token=${token}&email=${to}`,
  html: `<strong>Click on this link to verify your email ${hostUrl}/verification?token=${token}&email=${to}</strong>`
};
console.log(hostUrl)
console.log(msg)
sgMail.send(msg);
    
  };

  module.exports = sendEmail