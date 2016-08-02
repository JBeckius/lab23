var lyric = '';

$.get('/api/lyric', function(data) {
  lyric = data;
  console.log(lyric);
});
