const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const accountSid = 'ACa366addfe88f2c04a900b85cc3023421';
const authToken = '9a267e9afd2880ac8404d79b93b50727';
const twilio = require("twilio");
//const client = require('twilio')('ACa366addfe88f2c04a900b85cc3023421', '9a267e9afd2880ac8404d79b93b50727');
const client = new twilio(accountSid, authToken);


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/', (req, res) => {
    res.status(200).send({
        message: "running",
    });
//   const name = req.query.name || 'World';
//   res.setHeader('Content-Type', 'application/json');
//   res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

// app.get("/sendcode", (req, res) => {
//     client.verify
//     .services(YOUR_SERVICE_ID)
//     .verifications.create({
//         to: `+15874378939`,
//         channel: "sms",
//     })
//     .then((data) => {
//         res.status(200).send({
//             message: "verified",
//             phonenumber: `+15874378939`,
//             data,
//         })
//     })
// })

app.post('/message', function(req, res, next) {
    // Use the REST client to send a text message
    client.messages.create({
      to: '+19028183737',
      from: '+18722405819',
      body: 'This is a good idea'
    }).then(message => console.log(message)
    );
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