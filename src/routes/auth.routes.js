import Router from "router";
import { loginUser, registerUser } from "../conrollers/auth.controller.js";
import { userRegisterValidator } from "../validators/index.js";
import { validate } from "../middlewares/validators.middleware.js";

const router = Router();

router.route("/register").post(userRegisterValidator(), validate, registerUser);
router.route("/login").post(loginUser);

export default router;
