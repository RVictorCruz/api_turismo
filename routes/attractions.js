const express = require("express");
const router = express.Router();
const Attraction = require("../models/attraction");

// Buscar todas as atrações ou filtrar por destination_id
router.get("/", async (req, res) => {
  const { destination_id } = req.query;
  let query = {};
  if (destination_id) {
    query.destination_id = destination_id;
  }

  try {
    const attractions = await Attraction.find(query);
    res.json(attractions);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar atrações", error });
  }
});

// Buscar uma atração por ID
router.get("/:id", async (req, res) => {
  try {
    const attraction = await Attraction.findOne({ id: req.params.id });
    if (attraction) {
      res.json(attraction);
    } else {
      res.status(404).json({ message: "Atração não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar a atração", error });
  }
});

module.exports = router;
