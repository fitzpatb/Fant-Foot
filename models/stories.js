const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storySchema = new Schema({
  headline: {
    type: String,
    required: true
  },
  intro: {
    type: String,
    required: true
  },
  points: {
    type: Array,
    required: true
  },
  descriptions: {
    type: Array,
    required: true
  }
})

const Stories = mongoose.model("Stories", storySchema);

module.exports = Stories;
