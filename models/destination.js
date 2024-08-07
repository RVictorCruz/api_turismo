const mongoose = require("mongoose");

const DestinationSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  image_url: { type: String, required: true },
  created_at: { type: String },
  updated_at: { type: String },
  latitude: { type: Number },
  longitude: { type: Number },
});

module.exports = mongoose.model("Destination", DestinationSchema);
