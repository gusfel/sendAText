require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const Twilio = require('twilio');

const client = new Twilio(accountSid, authToken);

const sendText = (to, mess) => {
  client.messages.create({
    body: mess,
    to: `+1${to}`, // Text this number
    from: '+14845174617', // From a valid Twilio number
  })
    .then((message) => console.log(message.sid));
};

module.exports = sendText;

// client.messages.create({
//   body: 'Hello from Node',
//   to: '+14152606631', // Text this number
//   from: '+14845174617' // From a valid Twilio number
// })
//   .then((message) => console.log(message.sid));
