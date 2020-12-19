const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  template: {
    type: Number,
    required: "Selecting a template is required."
  }
});
f
const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;

//merge two collections with populate