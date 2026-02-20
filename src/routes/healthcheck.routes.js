import { Router } from "express";
import { healthCheck } from "../conrollers/healthcheck.controller.js";

const router = Router();

router.route("/").get(healthCheck);

export default router;
