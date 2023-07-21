import playlist from './json/playlist.json' assert { type: "json" };

export async function getPlaylist() {
  // simulate database call
  const playlistPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(playlist)
    }, 200);
  })

  return await playlistPromise;
}
