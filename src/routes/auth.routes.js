import Router from "router";
import { registerUser } from "../conrollers/auth.controller.js";

const router = Router();

router.route("/register").post(registerUser);

export default router;
