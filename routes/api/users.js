const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/")
    .get(userController.findAll)
    .post(userController.create);


router.route("/:id")
    .get(userController.findById)
<<<<<<< HEAD
    // .put(userController.update);
    .post(userController.update);
=======
    .put(userController.update);
>>>>>>> 75d5a975c4d23d5092d8cb8124e27d4a097ff1d3

router.route("/:id")
    // .get(userController.findById)
    .put(userController.update);

module.exports = router;
