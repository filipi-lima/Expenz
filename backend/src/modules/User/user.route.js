import { Router } from "express";
import userController from "./user.controller.js";
import validate from "../../middlewares/validate.js"
import { registerSchema, loginSchema } from "./user.schema.js"
const router = Router();

router.post("/", validate(registerSchema), userController.userRegistration);
router.post("/login", validate(loginSchema), userController.userLogin)

export default router;
