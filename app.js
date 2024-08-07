require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Conectar ao MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado ao MongoDB Atlas"))
  .catch((error) => console.error("Erro ao conectar ao MongoDB Atlas:", error));

// Rotas
app.use("/api/attractions", require("./routes/attractions"));
app.use("/api/destinations", require("./routes/destinations"));

module.exports = app;
