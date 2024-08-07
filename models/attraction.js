const mongoose = require("mongoose");

const AttractionSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String },
  tips: { type: String },
  image_url: { type: String },
  destination_id: { type: Number, required: true },
  created_at: { type: String },
  updated_at: { type: String },
  latitude: { type: Number },
  longitude: { type: Number },
});

module.exports = mongoose.model("Attraction", AttractionSchema);
