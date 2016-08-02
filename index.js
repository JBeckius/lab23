var ex = require("./lyrics.js");
var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));
app.get('/api/lyric', function(request, response) {
  response.send(ex[0]);
});
var server = app.listen(process.env.PORT, function () {
  var port = server.address().port;

  console.log('Example app listening at port', port);
})
