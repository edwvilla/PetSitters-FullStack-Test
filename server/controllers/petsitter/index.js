import { Router } from "express";
import PetSitter from "../../models/petsitter/index.js";
import City from "../../models/city/index.js";

const router = Router();

// CREATE
router.post("/", (req, res) => {
  PetSitter.create(req.body)
    .then((petsitter) => {
      res.json(petsitter);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// UPDATE
router.put("/:id", (req, res) => {
  PetSitter.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then(async (payload) => {
      const { id } = req.params;
      const petsitter = await PetSitter.findOne({ where: { id } });
      res.json(petsitter);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// DELETE
router.delete("/:id", (req, res) => {
  PetSitter.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((petsitter) => {
      res.json(petsitter);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// LIST ALL
router.get("/", (req, res) => {
  PetSitter.findAll()
    .then((petsitter) => {
      res.json(petsitter);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// LIST ALL FILTER BY STATEID
router.get("/state/:stateid", async (req, res) => {
  // get all cities that correspond to the stateid
  const cities = await City.findAll({
    where: {
      stateid: req.params.stateid,
    },
  })
    .then((cities) => {
      console.log(cities);
      return cities;
    })
    .catch((err) => {
      console.log(err);
    });

  // find all pettsitters that the citiid is in the list of cities
  const pettSiters = await PetSitter.findAll({
    where: {
      cityid: cities.map((city) => city.id),
    },
  })
    .then((petsitter) => {
      console.log(petsitter);
      return petsitter;
    })
    .catch((err) => {
      console.log(err);
    });

  res.json(pettSiters);
});

export default router;
