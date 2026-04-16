import express from "express";
import cors from "cors";
import userRouter from "../modules/User/user.route.js";

const app = express()

// Settings
app.use(cors())
app.use(express.json())

// Routes
app.use("/user", userRouter)

export default app;
