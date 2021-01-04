const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/")
    // .get(userController.findAll)
    // .post(userController.create)
    // .put(userController.findAll);


router
    .route("/:id")
    // .get(userController.findById)
    // .post(userController.findById);


module.exports = router;
