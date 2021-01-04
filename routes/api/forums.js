const router = require("express").Router();
const forumController = require("../../controllers/forumController");

router.route("/")
    .get(forumController.findAll)
    .post(forumController.create);

module.exports = router;