import express from "express";
import "dotenv/config";
import mongoose from "mongoose";

const app = express();
const Port = process.env.PORT || 5000;

app.listen(Port, () => {
  console.log(`Running on port: ${Port}`);
});
mongoose
  .connect("mongodb://localhost/practice")
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.log(`Error: ${err}`));
