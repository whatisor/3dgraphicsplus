var express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');
var app = express();
const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};
http.createServer(app).listen(process.env.PORT || 8001);
https.createServer(options, app).listen(443);

app.use(express.static('.'));