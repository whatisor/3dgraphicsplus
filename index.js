var express = require('express');
var app = express();
var temp = 0;
app.use('/', express.static('.'));
var server = app.listen(process.env.PORT || 8001, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Listening at http://%s:%s', host, port);
});