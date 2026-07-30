const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const {
  REFRESH_SECRET,
  REFRESH_EXPIRES_TIME,
  ACCESS_SECRET,
  ACCESS_EXPIRES_TIME,
} = require("../config/constants");

const promissifyJWTSign = promisify(jwt.sign);
const promissifyJWTVerify = promisify(jwt.verify);

module.exports.createAccesToken = async ({
  userId,
  email,
  role,
  geolocation,
}) =>
  await promissifyJWTSign({ userId, email, role, geolocation }, ACCESS_SECRET, {
    expiresIn: ACCESS_EXPIRES_TIME,
  });

module.exports.verifyAccesToken = async (token) =>
  await promissifyJWTVerify(token, ACCESS_SECRET);

module.exports.creatRefreshToken = async ({
  userId,
  email,
  role,
  geolocation,
}) =>
  await promissifyJWTSign(
    { userId, email, role, geolocation },
    REFRESH_SECRET,
    {
      expiresIn: REFRESH_EXPIRES_TIME,
    },
  );

module.exports.verifyRefreshToken = async (token) =>
  await promissifyJWTVerify(token, REFRESH_SECRET);
