const createHttpError = require("http-errors");
const { BanList } = require("../models/MongoDB");

module.exports.checkBan = async (req, res, next) => {
  try {
    const {
      tookenPayLoad: { userId },
    } = req;

    const banned = await BanList.findOne({
      userId,
    });

    if (banned) {
      return next(createHttpError(401, "User banned"));
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};
