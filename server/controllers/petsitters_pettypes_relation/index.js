import { Router } from "express";
import PetSitterPetTypesRelation from "../../models/petsitters_pettypes_relation/index.js";
import PetsType from "../../models/pettypes/index.js";

const router = Router();

// CREATE
router.post("/", async (req, res) => {
  var checkDups = false;
  try {
    const petSitterEntries = await PetSitterPetTypesRelation.findAll({
      where: {
        petSitterID: req.body.petSitterID,
      },
    });
    checkDups = petSitterEntries.find(
      (entry) => entry.petTypeID === req.body.petTypeID
    );
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Error while checking duplicates",
    });
  }

  if (checkDups) {
    return res.status(500).send({
      message: "Duplicate entry",
    });
  }

  PetSitterPetTypesRelation.create(req.body)
    .then((petsitter_pettypes_relation) => {
      res.json(petsitter_pettypes_relation);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// GET TYPES BY SITTER ID
router.get("/:id", async (req, res) => {
  // get relations
  const relations = await PetSitterPetTypesRelation.findAll({
    where: {
      petsitterid: req.params.id,
    },
  })
    .then((petsitter_pettypes_relation) => {
      return petsitter_pettypes_relation;
    })
    .catch((err) => {
      res.status(500).send(err);
    });

  if (!relations) {
    return res.status(500).send({
      message: "No relations found",
    });
  }

  // get types by petTypeId in relations
  const types = await PetsType.findAll({
    where: {
      id: relations.map((relation) => relation.petTypeID),
    },
  })
    .then((pettypes) => {
      return pettypes;
    })
    .catch((err) => {});

  if (!types) {
    return res.status(500).send({
      message: "No types found",
    });
  }

  if (!types) {
    return res.status(500).send({
      message: "No types found",
    });
  }

  res.json(types);
});

// DELETE WHERE SITTERID AND TYPEID
router.delete("/:sitterid/:typeid", (req, res) => {
  PetSitterPetTypesRelation.destroy({
    where: {
      petsitterid: req.params.sitterid,
      pettypeid: req.params.typeid,
    },
  })
    .then((petsitter_pettypes_relation) => {
      res.json({
        message: "Relation deleted",
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

export default router;
