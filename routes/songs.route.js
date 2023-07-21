import express from "express"
import { getSongs, getSongByTitle, postSong, getSongById } from "../controllers/songs.controller.js";

const router = express.Router();

router.get('/', getSongs, getSongByTitle);

router.get("/:id", getSongById)

router.post('/', postSong)



export default router;