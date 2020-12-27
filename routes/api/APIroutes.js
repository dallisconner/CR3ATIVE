const router = require("express").Router();
const userDataController = require("../../controllers/userDataController");

// Matches with "/api/userData"
router.route("/signup")
    .post(userDataController.create);

module.exports = router;
