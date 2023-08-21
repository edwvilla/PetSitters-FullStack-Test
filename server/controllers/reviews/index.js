// reviews crud controller for mongo db

import express from "express";
import Review from "../../models/review/index.js";

const router = express.Router();

// CREATE
router.post("/", (req, res) => {
  Review.create(req.body)
    .then((review) => {
      res.json(review);
    })
    .catch((err) => {
      console.log(err);
    });
});

// GET BY PET SITTER ID (mongo)
router.get("/petsitter/:id", (req, res) => {
  Review.find({ petSitterID: req.params.id })
    .then((review) => {
      res.json(review);
    })
    .catch((err) => {
      console.log(err);
    });
});

export default router;
