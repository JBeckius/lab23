var lyric = '';
//get something from /api/lyric
//Confusing!! .get does different things in JQ and express!
$.get('/api/lyric', function(data) {
  lyric = data;
  console.log(lyric);
});
