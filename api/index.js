import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import userRoute from "./routes/userRoute.js";
import authRoute from "./routes/authRoute.js";
import cors from "cors";
import cookieParser from "cookie-parser";

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log(err.message));

const app = express();

app.use(cors());

app.use(express.json());

app.use(cookieParser());

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
