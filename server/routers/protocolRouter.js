const protocolRouter = require("express").Router({ mergeParams: true });
const imageRouter = require("./imageRouter");
const { uploadImages } = require("../middlewares/imagesUpload");
const paginate = require("../middlewares/paginate");
const ProtocolController = require("../controllers/ProtocolController");
const { checkToken } = require("../middlewares/checkToken");

// getAllProtocols
//createProtocol
//getAllProtocolsByOfficerId
//updateProtocolById
//deleteProtocolById

protocolRouter
  .route("/")
  .get(paginate, ProtocolController.getAllProtocols)
  .post(uploadImages, ProtocolController.createProtocol);

protocolRouter
  .route("/parkOfficer/:officerId")
  .get(paginate, ProtocolController.getAllProtocolsByOfficerId);

protocolRouter
  .route("/:id")
  .put(uploadImages, ProtocolController.updateProtocolById)
  .delete(ProtocolController.deleteProtocolById);

protocolRouter.use("/:protocolId/images", imageRouter);
module.exports = protocolRouter;
