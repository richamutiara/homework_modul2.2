import { getPlaylist } from "../../repositories/playlist/playlist.repository.js";

class PlaylistService {
  constructor(playlistRepo) {
    this.playlistRepo = playlistRepo;
  }

  async getAllPlaylist() {
    return await this.playlistRepo.getPlaylist();
  }
}

const playlistService = new PlaylistService({
  getPlaylist
})

export default playlistService;