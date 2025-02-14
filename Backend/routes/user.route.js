import express from "express";
import { registerUser, loginUser, getBio, updateBio } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.post("/bio", getBio);
router.post("/updatebio", updateBio);

export default router;
