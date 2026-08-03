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

userRouter.route("/banlist").post(AdminController.bun);

userRouter.route("/banlist").delete(AdminController.unban);

userRouter.route("/all").get(AdminController.getAllUsers);

userRouter.route("/all/band").get(AdminController.getAllBannedUsers);

module.exports = userRouter;
