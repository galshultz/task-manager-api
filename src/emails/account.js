const sgmail = require('@sendgrid/mail')

sgmail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgmail.send({
        to: email,
        from: 'galshultz88@gmail.com',
        subject: 'Thanks for joining in',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    })
}

const sendCancelEmail = (email, name) => {
    sgmail.send({
        to: email,
        from: 'galshultz88@gmail.com',
        subject: 'Sorry to see you leave :(',
        text: `${name}. Please let us know, how can we improve?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}