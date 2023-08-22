import express from "express";
import User from "../../models/user/index.js";

import signUp from "./signup.js";
import login from "./login.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", login);

export default router;
