const router = require("express").Router();
const parkOfficerRouter = require("./parkOfficerRouter");
const protocolRouter = require("./protocolRouter");
const imageRouter = require("./imageRouter");
const userRouter = require("./userRouter");

router.use("/parkOfficers", parkOfficerRouter);
router.use("/protocols", protocolRouter);
router.use("/users", userRouter);

module.exports = router;
