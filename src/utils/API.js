import axios from "axios";

export default {
    getUsers: function () {
        return axios.get("https://randomuser.me/api/?results=50&nat=us");
    },

    saveProfile: function (profileData) {
        return axios.post("/api/signup", profileData);
    },

    saveProfile: function (profileData) {
        return axios.post("/api/profileeditor", profileData);
    }
};