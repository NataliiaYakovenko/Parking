const userRouter = require("express").Router();
const UserController = require("../controllers/UserController");
const { hashPass } = require("../middlewares/hashPassword");
const { checkToken } = require("../middlewares/checkToken");
const { checkAdmin } = require("../middlewares/checkAdmin");
const AdminController = require("../controllers/AdminController");

userRouter.route("/sign-up").post(hashPass, UserController.registrationUser);

userRouter.route("/sign-in").post(UserController.loginUser);

userRouter.route("/").get(UserController.checkAuth);

userRouter.route("/refresh").post(UserController.refreshSession);

userRouner.route("/banlist").post(AdminController.bun);

userRouner.route("/banlist").delete(AdminController.unban);

module.exports = userRouter;
