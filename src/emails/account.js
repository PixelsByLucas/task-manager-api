const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'mail@lucas-knight.com',
    subject: 'Thanks for joining in',
    text: `Welcome to the app, ${name}.  Let me know what you think of the app.`
  })
}

const sendCancellationEmail = (email, name) => {
  console.log(email, name)
  sgMail.send({
    to: email,
    from: 'mail@lucas-knight.com',
    subject: 'Sorry to see you go',
    text: `So sorry to see you leave ${name}.  Let us know what we could have done differently.`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail
}
