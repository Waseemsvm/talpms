const express = require("express");
const app = require("express")();
const cors = require("cors");
require("dotenv").config();
const studentRouter = require("./controller/student");
const PORT = process.env.PORT;

app.use(cors({}));

app.use(express.json());

/** Database connection */
import Database from "./database/initDB";
const db = Database.getInstance();
db.testConnection();

app.use("/student", studentRouter);

app.listen(PORT, (err) => {
  console.log("Server started on port ", PORT);
});
