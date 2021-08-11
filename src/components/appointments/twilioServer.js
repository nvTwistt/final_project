const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const data = require('../../secrets/data');
const accountSid = data.twilio_sid;
const authToken = data.twilio_token;
const basePhoneNumber = data.twilio_number;
const twilio = require("twilio");
const client = new twilio(accountSid, authToken);
const numberCleaner = require('../helpers/phoneFormatter');
const messageCleaner = require('../helpers/messageFormatter');
const cors = require('cors');
const app = express();

/**
 * Set up app permissions so that data can be transfered from one server to another.
 */
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(pino);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-origin", "https://www.twilio.com")
  res.setHeader('Access-Control-Allow-Methods', "GET,POST,OPTIONS")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, data, Accept")
  next();
})

/**
 * Basic get request to test that the server is working.
 */
app.get('/', (req, res) => {
  res.status(200).send({
    message: "running",
  });
});

/**
 * Axios post request which authorizes twilio to send a message to patients and doctors.
 */
app.post('/message', function (req, res) {
  // Use the REST client to send a text message
  const body = JSON.parse(JSON.stringify(req.body));
  let payload;
  for (const items in body) {
    payload = JSON.parse(items)
    break;
  }
  console.log("Getting key", payload);
  let messageInformation = messageCleaner.patientMessage(payload)
  let outboudNumber = numberCleaner.format(messageInformation[2]);
  client.messages.create({
    to: `${outboudNumber}`,
    from: `${basePhoneNumber}`,
    body: `${messageInformation[0]}`
  })
    .then(message =>
      console.log(message)
    );
  client.messages.create({
    to: `${data.doctors_number}`,
    from: `${basePhoneNumber}`,
    body: `${messageInformation[1]}`
  })
    .then(message =>
      console.log(message)
    );
  return res.status(200).send({ message: 'SMS sent..' })
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);