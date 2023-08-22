import createError from "http-errors";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import logger from "morgan";
import session from "express-session";
import flash from "express-flash";
import cors from "cors";

import authRouter from "./controllers/auth/index.js";
import logoutRouter from "./controllers/auth/logout.js";
import petsitterRouter from "./controllers/petsitter/index.js";
import petSitterPetTypesRelations from "./controllers/petsitters_pettypes_relation/index.js";
import reviewRouter from "./controllers/reviews/index.js";
import cityRouter from "./controllers/city/index.js";

import { connectToMySQL, sequelize } from "./database/mysql/index.js";
import { connectToMongoDB } from "./database/mongo/index.js";
import {
  checkAuthentication,
  checkNotAuthentication,
} from "./controllers/auth/middleware.js";

import validateToken from "./middlewares/validateToken.js";

connectToMySQL();
connectToMongoDB();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(flash());
app.use(
  session({
    secret: "secret", // TODO: change this to a .env variable
    resave: true,
    saveUninitialized: true,
    store: sequelize.sessionStore,
  })
);

// ----- ROUTES ----- //

app.use("/auth", authRouter);
app.use("/logout", logoutRouter);
app.use("/petsitter", validateToken, petsitterRouter);
app.use(
  "/petsitter_pettypes_relation",
  validateToken,
  petSitterPetTypesRelations
);
app.use("/review", validateToken, reviewRouter);
app.use("/city", validateToken, cityRouter);

app.use("/", (req, res) => {
  res.send({ message: "Welcome to PetSitter API" });
});

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});

export default app;
