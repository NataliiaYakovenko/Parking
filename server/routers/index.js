const router = require("express").Router();
const parkOfficerRouter = require("./parkOfficerRouter");

router.use("/parkOfficerRouter", parkOfficerRouter);

module.exports = router;
