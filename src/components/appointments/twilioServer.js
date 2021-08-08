const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const accountSid = 'ACa366addfe88f2c04a900b85cc3023421';
const authToken = '607b693df9f55d5edd684b50d032928c';
const twilio = require("twilio");
//const client = require('twilio')('ACa366addfe88f2c04a900b85cc3023421', '9a267e9afd2880ac8404d79b93b50727');
const client = new twilio(accountSid, authToken);
const data = require('./data');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(pino);
app.use(function (req,res, next){
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

app.post('/message', function(req, res) {
    // Use the REST client to send a text message
    console.log("here====>++", req.body);
    const body = JSON.parse(JSON.stringify(req.body)); 
    console.log("here====>++", typeof body);
    let payload;

    console.log("Body here00000>>>", body);
    for (const items in body) {
      console.log("items: ", items);
      payload = JSON.parse(items)
      break;
    }
    console.log("Getting key", payload);

    // { '{"name":"ndnbvedbfv","food":"jbnwbnej","id":3}': '' }

    // console.log("res 1: ", res);

    client.messages.create({
      to: '+19028183737',
      from: '+18722405819',
      body: `I need this to work! ${payload.name} is a/an ${payload.food}`
    })

    // .then(message => 
    //   console.log(message)
    // );
    return res.status(200).send({ message: 'SMS sent..' })
  });

// client.messages
//     .create({
//         body: "Hello",
//         from: "+18722405819",
//         statusCallback: 'http://postb.in/1234abcd',
//         to: "+15874378939"
//     })
//     .then(messages => console.log(messages.sid))

// app.post('/api/messages', (req, res) => {
//   res.header('Content-Type', 'application/json');
//   client.messages
//     .create({
//       from: process.env.TWILIO_PHONE_NUMBER,
//       to: req.body.to,
//       body: req.body.body
//     })
//     .then(() => {
//       res.send(JSON.stringify({ success: true }));
//     })
//     .catch(err => {
//       console.log(err);
//       res.send(JSON.stringify({ success: false }));
//     });
// });

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);

// const express = require('express');
// const bodyParser = require('body-parser');
// const pino = require('express-pino-logger')();
// // const twilio = require('twilio'); 

// // const accountSid = "ACa366addfe88f2c04a900b85cc3023421";
// // const authToken = "9a267e9afd2880ac8404d79b93b50727"; 
// // const client = new twilio(accountSid, authToken);

// const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(pino);

// app.post('/api/greeting', (req, res) => {
//   res.header('Content-Type', 'application/json');
//   res.send(JSON.stringify({ greeting: `Hello Matt!` }));
//   // client.messages
//   // .create({
//   //   from: "+18722405819",
//   //   to: req.body.to,
//   //   body: req.body.body
//   // })
//   // .then(() => {
//   //   res.send(JSON.stringify({ success: true }));
//   // })
//   // .catch(err => {
//   //   console.log(err);
//   //   res.send(JSON.stringify({ success: false }));
//   // });
// });

// app.listen(3001, () =>
//   console.log('Express server is running on localhost:3001')
// );