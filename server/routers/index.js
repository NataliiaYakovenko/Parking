const router = require("express").Router();
const parkOfficerRouter = require("./parkOfficerRouter");
const protocolRouter = require("./protocolRouter");
const imageRouter = require("./imageRouter");

router.use("/parkOfficers", parkOfficerRouter);
router.use("/protocols", protocolRouter);


module.exports = router;
