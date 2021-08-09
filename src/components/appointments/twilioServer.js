const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const data = require('../../secrets/data');
const accountSid = data.twilio_sid;
const authToken = data.twilio_token;
const twilio = require("twilio");
const client = new twilio(accountSid, authToken);
const numberCleaner = require('../helpers/phoneFormatter');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(pino);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-origin", "https://www.twilio.com")
  res.setHeader('Access-Control-Allow-Methods', "GET,POST,OPTIONS")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, data, Accept")
  next();
})

app.get('/', (req, res) => {
  res.status(200).send({
    message: "running",
  });
});

app.post('/message', function (req, res) {
  // Use the REST client to send a text message
  const body = JSON.parse(JSON.stringify(req.body));
  let payload;
  console.log("Body here00000>>>", body);
  for (const items in body) {
    payload = JSON.parse(items)
    break;
  }
  console.log("Getting key", payload);
  let information = payload['info'];
  let diagnosis = payload['diagnosis'];
  let introduction = `Hello ${information.name}.`
  let bodyMessaage = ` Your results show that there is a ${diagnosis.accuracy}% chance that you have a ${diagnosis.symptom}.`
  let reccomendation = ` Based off the diagnosis, we are reccomending you to see a doctor who specializes in ${diagnosis.specialization_1} or ${diagnosis.specialization_2}`
  let completeMessage = introduction + bodyMessaage + reccomendation;
  let outboudNumber = numberCleaner.format(information.to);
  let doctorsMessage = `You have received an appointment request from ${information.name}. They are experiencing a ${diagnosis.symptom}.`
  client.messages.create({
    to: `${outboudNumber}`,
    from: '+18722405819',
    body: `${completeMessage}`
  })
    .then(message =>
      console.log(message)
    );
  client.messages.create({
    to: `${data.doctors_number}`,
    from: '+18722405819',
    body: `${doctorsMessage}`
  })
    .then(message =>
      console.log(message)
    );
  return res.status(200).send({ message: 'SMS sent..' })
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);