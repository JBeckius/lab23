var ex = require("./lyrics.js");
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + "/public"));
//if we get a request at /api/lyric, do the thing.
app.get('/api/lyric', function(request, response) {
  response.send(ex[0]);
});
var server = app.listen(app.get('port'), function () {
  var port = server.address().port;

  console.log('Example app listening at port', app.get('port'));
})

//A change
