const protocolRouter = require("express").Router({ mergeParams: true });

const { uploadImages } = require("../middlewares/imagesUpload");
const paginate = require("../middlewares/paginate");

const ProtocolController = require("../controllers/ProtocolController");

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
  .route("/:id")
  .get(paginate, ProtocolController.getAllProtocolsByOfficerId)
  .put(uploadImages, ProtocolController.updateProtocolById)
  .delete(ProtocolController.deleteProtocolById);

module.exports = protocolRouter;