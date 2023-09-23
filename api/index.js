import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log(err.message));

const app = express();

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
