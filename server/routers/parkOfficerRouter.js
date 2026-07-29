const ParkOfficersRouter = require("express").Router();
const imageRouter = require("./imageRouter");
const protocolRouter = require("./protocolRouter");
const ParkOfficerController = require("../controllers/ParkOfficersController");
const ProtocolController = require("../controllers/ProtocolController");
const { checkToken } = require("../middlewares/checkToken");


//getAllParkOfficers
//getParkOfficerById
//createParkOfficer
//updatrParkOfficerById
//deleteParkOfficerById
//dismissParkOfficerById

ParkOfficersRouter.route("/")
  .get(ParkOfficerController.getAllParkOfficers)
  .post(ParkOfficerController.createParkOfficer);

ParkOfficersRouter.route("/:id")
  .get(ParkOfficerController.getParkOfficerById)
  .put(ParkOfficerController.updateParkOfficerById)
  .delete(ParkOfficerController.deleteParkOfficerById);

ParkOfficersRouter.route("/:id/dismiss").put(
 ParkOfficerController.dismissParkOfficerById,
);

ParkOfficersRouter.get("/protocols", ProtocolController.getAllProtocols);

ParkOfficersRouter.use("/:officerId/protocols", protocolRouter);
ParkOfficersRouter.use("/protocols/:protocolId/images", imageRouter);

module.exports = ParkOfficersRouter;
