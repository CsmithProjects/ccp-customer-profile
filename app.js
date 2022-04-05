const express = require('express');
const https = require('https');
const http = require('http');
const fs = require('fs');
const port = 5000;
const app = express();
const bodyParser = require("body-parser");

const options = {
  key: fs.readFileSync('localhost-key.pem'),
  cert: fs.readFileSync('localhost.pem')
};

app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

https.createServer(options, app).listen(port, () => {
    console.log(`Now listening on port ${port}`);
});

http.createServer(app).listen(8888, () => {
    console.log(`Now listening on port 8888`);
});

require('./customerProfileAPI.js')(app); //API
require('./index.js')(app); 
