const mongoose = require("mongoose");
const Schema = mongoose.Schema

const forumSchema = new Schema ({
    post: {
        type: String,
    }
})

const Forum = mongoose.model("Forum", forumSchema);

module.exports = Forum;