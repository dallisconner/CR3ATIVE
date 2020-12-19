const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//create cr3ative database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cr3ativedb", {
    useNewUrlParser: true,
    useFindAndModify: false
});

require("./routes/APIroutes.js")(app);
require("./routes/Htmlroutes.js")(app);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})
    