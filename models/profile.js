const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema(
    {
        profile:
        {
            type: String,

        },
        posts:
            [
                {
                    type:
                    {
                        type: String,
                        trim: true
                    },
                    name:
                    {
                        type: String,
                        trim: true
                    },
                    duration:
                    {
                        type: Number,
                    },
                    weight:
                    {
                        type: Number
                    },
                    reps:
                    {
                        type: Number
                    },
                    sets:
                    {
                        type: Number
                    },
                    distance:
                    {
                        type: Number
                    }
                }
            ]
    });

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;