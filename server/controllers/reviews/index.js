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

// GET AVERAGE RATING BY PET SITTER ID (mongo)
router.get("/average/:id", (req, res) => {
  Review.find({ petSitterID: req.params.id })
    .then((review) => {
      let sum = 0;
      review.forEach((element) => {
        sum += element.rating;
      });
      const average = sum / review.length;
      res.json({
        average: average,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

export default router;
