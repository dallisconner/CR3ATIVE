import axios from "axios";

export default {
    // getUsers: function () {
    //     return axios.get("https://randomuser.me/api/?results=50&nat=us");
    // },
    getUsers: function () {
        return axios.get("/api/users/");
    },
    saveUser: function (profileData) {
        return axios.post("/api/users/", profileData);
    },
    getUser: function (id) {
        return axios.get("/api/users/" + id);
    }
};