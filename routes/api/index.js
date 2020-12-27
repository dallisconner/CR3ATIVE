const router = require("express").Router();
const userRoutes = require("./APIroutes");

// signup routes
router.use("/signup", userRoutes);

module.exports = router;
