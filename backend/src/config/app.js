import express from "express";
import cors from "cors";
import userRouter from "../modules/User/user.route.js";
import errorHandling from "../middlewares/errorHandling.js";

const app = express()

// Settings
app.use(cors())
app.use(express.json())

// Routes
app.use("/users", userRouter)

// error Handling
app.use(errorHandling)

export default app;
