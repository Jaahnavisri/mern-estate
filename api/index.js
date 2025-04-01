import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables before accessing them
dotenv.config();
console.log("Mongo URI:", process.env.MONGO);


// Now, access the environment variable
mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000!!!");
});
