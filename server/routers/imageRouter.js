const imageRouter = require("express").Router({ mergeParams: true });
const { uploadImages } = require("../middlewares/imagesUpload");
const ImageController = require("../controllers/ImageController");
const {checkToken} = require('../middlewares/checkToken')

//getProtocolImages
//addProtocolImage
//getImageById
//deleteImageById

imageRouter
  .route("/")
  .get(ImageController.getProtocolImages)
  .post(uploadImages, ImageController.addProtocolImage);

imageRouter
  .route("/:imageId")
  .get( ImageController.getImageById)
  .delete(ImageController.deleteImageById);

module.exports = imageRouter;
