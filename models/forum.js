const mongoose = require("mongoose");
const Schema = mongoose.Schema

const forumSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  username: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Forum = mongoose.model("Forum", forumSchema);

module.exports = Forum;