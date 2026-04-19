import { Router } from "express";
import userController from "./user.controller.js";
import validation from "../../middlewares/validation.js"
import authentication from "../../middlewares/authentication.js"
import { registerSchema, loginSchema } from "./user.schema.js"
const router = Router();

router.post("/", validation(registerSchema), userController.userRegistration);
router.post("/login", validation(loginSchema), userController.userLogin)
router.get("/home", authentication)

export default router;
