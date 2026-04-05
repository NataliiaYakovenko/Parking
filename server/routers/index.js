const router = require("express").Router();
const parkOfficerRouter = require("./parkOfficerRouter");

router.use("/parkOfficers", parkOfficerRouter);

module.exports = router;
