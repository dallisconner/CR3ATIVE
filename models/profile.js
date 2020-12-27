const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  template: {
    type: Number,
    required: "Selecting a template is required."
  }
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
