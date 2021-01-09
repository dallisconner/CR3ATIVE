require('dotenv').config()
const express = require("express");
const cloudinary = require('cloudinary')
const formData = require('express-form-data')
const cors = require("cors")
const mongoose = require("mongoose");
const routes = require("./routes");
const db = require("./models");

const CLIENT_ORIGIN = 'http://localhost:3000'
const app = express();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

app.use(cors({
    origin: CLIENT_ORIGIN
}))

app.use(formData.parse())

app.post('/image-upload/:id', (req, res) => {

    const values = Object.values(req.files)
    const promises = values.map(image => cloudinary.uploader.upload(image.path))

    Promise
        .all(promises)
        .then(results => {
            console.log(results)
            const image = results[0].secure_url
            db.User
                .findOneAndUpdate({ _id: req.params.id }, { image })
                .then(dbModel => {
                    res.json(dbModel)
                })
        })
        .catch((err) => res.status(400).json(err))
})

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
} else {
    app.use(express.static("public"));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/creativedb", {
    useNewUrlParser: true,
    useFindAndModify: false
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})
// to create new commit