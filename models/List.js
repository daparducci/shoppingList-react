const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  quantity: Number,
  item: String,
  unit: String,
  complete: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("List", listSchema);
