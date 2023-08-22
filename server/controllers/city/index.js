import { Router } from "express";
import City from "../../models/city/index.js";

const router = Router();

// GET CITY BY ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const city = await City.findOne({ where: { id: id } });
  res.json(city);
});

export default router;
