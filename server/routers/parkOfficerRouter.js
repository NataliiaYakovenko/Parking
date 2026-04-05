const parkOfficerRouter = require("express").Router();
const imageRouter = require("./imageRouter");
const protocolRouter = require("./protocolRouter");
const ParkOfficerController = require("../controllers/ParkOfficersController");

//getAllParkOfficers
//getParkOfficerById
//createParkOfficer
//updatrParkOfficerById
//deleteParkOfficerById
//dismissParkOfficerById

parkOfficerRouter
  .route("/")
  .get(ParkOfficerController.getAllParkOfficers)
  .post(ParkOfficerController.createParkOfficer);

parkOfficerRouter
  .route("/:id")
  .get(ParkOfficerController.getParkOfficerById)
  .put(ParkOfficerController.updatrParkOfficerById)
  .delete(ParkOfficerController.deleteParkOfficerById);

parkOfficerRouter
  .route("/:id/dismiss")
  .put(ParkOfficerController.dismissParkOfficerById);

parkOfficerRouter.use("/:officerId/protocols", protocolRouter);
parkOfficerRouter.use("/protocols/:protocolId/images", imageRouter);

module.exports = parkOfficerRouter;
