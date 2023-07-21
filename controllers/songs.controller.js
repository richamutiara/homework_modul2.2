const richaPlaylist = {
  "songs" : [
      {
          "id" : 1,
          "title" : "stry of my life",
          "artists" : ["One Direction"],
          "url" : "https://open.spotify.com/track/4nVBt6MZDDP6tRVdQTgxJg"
      },
      {
          "id" : 2,
          "title" : "stry of my life",
          "artists" : ["One Direction"],
          "url" : "https://open.spotify.com/track/4nVBt6MZDDP6tRVdQTgxJg"
      },
      {
          "id" : 3,
          "title" : "stry of my life",
          "artists" : ["One Direction"],
          "url" : "https://open.spotify.com/track/4nVBt6MZDDP6tRVdQTgxJg"
      },
      {
          "id" : 4,
          "title" : "stry of my life",
          "artists" : ["One Direction"],
          "url" : "https://open.spotify.com/track/4nVBt6MZDDP6tRVdQTgxJg"
      }
  ], 
  "owner": "Richa"
}

function getSongs(req, res, next) {
  if (req.query.title) {
    next();
    return;
  }

  res.json(richaPlaylist.songs)
}

function getSongByTitle(req, res) {
  const titleQuery = req.query.title

  const selectedSong = richaPlaylist.songs.find((song) => song.title === titleQuery);

  if (selectedSong) {
    res.json(selectedSong)
  } 

  res.status(404).contentType('text/html').send('No song found with title ' + titleQuery)
  
}

function getSongById(req, res) {
  const id = req.params.id;
  const song = richaPlaylist.songs[id - 1];
  res.json(song);
}

function postSong(req, res) {
  const song = req.body;

  if (!song) {
    res.status(400).send("You have not send a valid song!");
  }

  richaPlaylist.songs.push(song);
  res.json({
    status: "success",
    message: "song successfully added"
  })
}

export { getSongs, getSongByTitle, postSong, getSongById}