const router = require("express").Router();
// const userController = require("../../controllers/userController");
const userDataController = require("../../controllers/userDataController");

router.route("/")
    .post(userDataController.create);

module.exports = router;