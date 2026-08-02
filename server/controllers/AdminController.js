const { User, BanList } = require("../models/MongoDB/BanList");
const createHttpError = require("http-errors");

module.exports.bun = async (req, res, next) => {
  try {
    const {
      tokenPayloud: { UserId: adminId },
      body: { uaerId, reason },
    } = req;

    const foundUser = await User.findOne({
      _id: userId,
    });

    if (foundUser) {
      const existinBan = await BanList.findOne({ userId });

      if (existinBan) {
        return next(createHttpError(400, "User has been alresdy banned"));
      }
      const banned = await BanList.create({ userId, adminId, reason });

      return res.status(200).send({ data: banned });
    } else {
      return next(createHttpError(404, "User not found"));
    }
  } catch (error) {
    next(error);
  }
};

module.exports.unban = async (req, res, next) => {
  try {
    const {
      tokenPayloud: { userId: adminId },
      body: { userId },
    } = req;

    const result = await BanList.deleteOne({ adminId, userId });

    if (result.deletedCount > 0) {
      return res.status(200).send("User unbanned successfully");
    } else {
      return next(createHttpError(404, "User not found"));
    }
  } catch (error) {
    next(error);
  }
};
