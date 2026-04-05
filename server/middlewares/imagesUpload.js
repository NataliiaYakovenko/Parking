const path = require("path");
const multer = require("multer");

const { STATIC_PATH } = require("../config");
const { createPublicFolder } = require("../utils");

const patToImage = path.resolve(STATIC_PATH, "images");
createPublicFolder(patToImage);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, patToImage);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

module.exports.uploadImages = upload.array('images', 5)
