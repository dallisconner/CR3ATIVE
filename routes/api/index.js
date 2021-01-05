const router = require("express").Router();
const userRoutes = require("./users");
const forumRoutes = require("./forums")

router.use("/users", userRoutes);
router.use("/forums", forumRoutes);

module.exports = router;
