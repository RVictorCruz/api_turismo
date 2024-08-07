const express = require("express");
const router = express.Router();
const Destination = require("../models/destination");

// Buscar todas as cidades
router.get("/", async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar cidades", error });
  }
});

// Buscar uma cidade por ID
router.get("/:id", async (req, res) => {
  try {
    const destination = await Destination.findOne({ id: req.params.id });
    if (destination) {
      res.json(destination);
    } else {
      res.status(404).json({ message: "Cidade não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar a cidade", error });
  }
});

module.exports = router;
