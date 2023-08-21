import express from "express";
import passportConfig from "./passport_config.js";
import User from "../../models/user/index.js";
import bcrypt from "bcrypt";

import signUp from "./signup.js";
import login from "./login.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", login);

export default router;
