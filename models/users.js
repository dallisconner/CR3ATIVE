const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      require: "Name is Required"
    },
    username: {
      type: String,
      trim: true,
      require: "Username is Required."
    },
    password: {
      type: String,
      trim: true,
      require: "Password is Required."
    },
    age: {
      type: Number
    },
    email: {
      type: String,
      trim: true
    },
    phone: {
      type: String
    },
    image: {
      type: String
    },
    profession: {
      type: String
    },
    description: {
      type: String
    }
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;