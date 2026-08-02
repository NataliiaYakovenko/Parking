const bcrypt = require("bcrypt");
const { User, RefreshToken, BanList } = require("../models/MongoDB");
const {
  createAccesToken,
  creatRefreshToken,
  verifyAccesToken,
  verifyRefreshToken,
} = require("../services/createSession");
const createHttpError = require("http-errors");
const { create } = require("../models/MongoDB/User");

module.exports.registrationUser = async (req, res, next) => {
  try {
    const { body } = req;

    const createdUser = await User.create({
      ...body,
      passwordHash: req.passwordHash,
    });

    const accessToken = await createAccesToken({
      userId: createdUser.id,
      email: createdUser.email,
      role: createdUser.role,
      geolocation: body.geolocation || "unknown",
    });

    const refreshToken = await creatRefreshToken({
      userId: createdUser.id,
      email: createdUser.email,
      role: createdUser.role,
      geolocation: body.geolocation || "unknown",
    });

    await RefreshToken.create({
      token: refreshToken,
      userId: createdUser._id,
      geolocation: body.geolocation || "unknown",
    });

    return res
      .status(200)
      .send({ data: createdUser, tokens: { accessToken, refreshToken } });
  } catch (error) {
    next(error);
  }
};

module.exports.loginUser = async (req, res, next) => {
  try {
    const {
      body: { email, password, geolocation },
    } = req;

    const foundUser = await User.findOne({ email: email });

    if (foundUser) {
      const result = await bcrypt.compare(password, foundUser.passwordHash);
      if (!result) {
        return res.status(400).send("Incorrect email and password");
      }

      const accessToken = await createAccesToken({
        userId: foundUser.id,
        email: foundUser.email,
        role: foundUser.role,
        geolocation,
      });

      const refreshToken = await creatRefreshToken({
        userId: foundUser.id,
        email: foundUser.email,
        role: foundUser.role,
        geolocation,
      });

      await RefreshToken.create({
        token: refreshToken,
        userId: foundUser._id,
        geolocation,
      });

      return res
        .status(200)
        .send({ data: foundUser, tokens: { accessToken, refreshToken } });
    } else {
      return res.status(400).send("Incorrect email and password");
    }
  } catch (error) {
    next(error);
  }
};

module.exports.checkAuth = async (req, res, next) => {
  try {
    const {
      tokenPayload: { email },
    } = req;

    const foundUser = await User.findOne({
      email: email,
    });

    return res.status(200).send({ data: foundUser });
  } catch (error) {
    next(error);
  }
};

module.exports.refreshSession = async (req, res, next) => {
  const {
    body: { refreshToken, geolocation },
  } = req;

  let verifyResult;

  try {
    verifyResult = await verifyRefreshToken(refreshToken);
  } catch (error) {
    return next(createHttpError(401, "Invalid refresh token"));
  }

  try {
    if (verifyResult) {
      const user = await User.findOne({ _id: verifyResult.userId });

      const oldRefreshTokenFromDb = await RefreshToken.findOne({
        $and: [{ token: refreshToken }, { userId: user._id }],
      });

      if (oldRefreshTokenFromDb) {
        await RefreshToken.deleteOne({
          $and: [{ token: refreshToken }, { userId: user._id }],
        });

        const newAccessToken = await createAccesToken({
          userId: user._id,
          email: user.email,
          role: user.role,
          geolocation,
        });

        const newRefreshToken = await creatRefreshToken({
          userId: user._id,
          email: user.email,
          role: user.role,
          geolocation,
        });

        await RefreshToken.create({
          token: newRefreshToken,
          userId: user._id,
          geolocation,
        });

        return res.status(200).send({
          tokens: {
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
          },
        });
      }
    } else {
      return next(createHttpError(401, "Token not found"));
    }
  } catch (error) {
    next(error);
  }
};

