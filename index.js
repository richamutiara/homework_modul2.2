import express from "express";

const playlistSongs = [
  {
    id: 1,
    title: "Story of my life",
    artists: ["One Direction"],
    url: "https://open.spotify.com/track/4nVBt6MZDDP6tRVdQTgxJg",
  },
  {
    id: 2,
    title: "Story of my life",
    artists: ["One Direction"],
    url: "https://open.spotify.com/track/4nVBt6MZDDP6tRVdQTgxJg",
  },
];

const app = express();
app.use(express.json());

app.post("/songs", (req, res) => {
  const songSentByUser = req.body;
  playlistSongs.push(songSentByUser);
  console.log(playlistSongs);
  res.status(201).json({
    status: "success",
    message: "Song successfully added on your playlist!",
  });
});

app.get("/songs", (req, res) => {
  if (!req.query.title) {
    res.json(playlistSongs)
  } else {
    const songTitle = req.query.title;
    const result = playlistSongs.find((song) => song.title === songTitle);
    res.json(result);
  } 
});

// app.get("/songs", (req, res) => {
//   res.json(playlistSongs);
// });

app.listen(3000, () => {
  console.log("Server 3000 on");
});
