import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import poiRoutes from "./routes/pois.js";

const app = express();

dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());

mongoose.connect(
  'mongodb+srv://admin-luke:ForksUp11@cluster0.x9qqa.mongodb.net/boeingDB',
  { useNewUrlParser: true }
);

app.use("/", poiRoutes);


app.get("/", (req, res) => {
    res.send("Hello to Boeing API");
});

const PORT = process.env.PORT || 5000;

// Port is dynamically accessible by Heroku as well as (or) locally on port 3000
app.listen(PORT, function () {
  console.log('Successfully started server on port 5000!');
});